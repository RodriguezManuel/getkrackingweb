<template>
  <div>
    <side-bar/>
    <top-bar/>
    <v-container style="max-width: 1400px;">
      <v-card color="white" style="border-radius: 15px;">
        <v-row class="fill-height">
          <v-col>
            <v-sheet height="64">
              <v-toolbar flat>
                <PopupAddEvent />
                <v-spacer></v-spacer>
                <v-btn fab text color="grey darken-2" @click="prev">
                  <v-icon large>
                    mdi-chevron-left
                  </v-icon>
                </v-btn>
                <v-btn fab text color="grey darken-2" @click="next">
                  <v-icon large>
                    mdi-chevron-right
                  </v-icon>
                </v-btn>
                <v-toolbar-title v-if="$refs.calendar">
                  {{ $refs.calendar.title }}
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn @click="type = 'month'" class="CustomButton"
                       v-bind:class="(type === 'month')? 'grey darken-2 white--text': 'white black--text'"
                       style="margin-right: 1%">Month
                </v-btn>
                <v-btn @click="type = 'week'" class="CustomButton"
                       v-bind:class="(type === 'week')? 'grey darken-2 white--text': 'white black--text'">Week
                </v-btn>

              </v-toolbar>
            </v-sheet>
            <v-sheet height="600">
              <v-calendar
                  ref="calendar"
                  v-model="focus"
                  color="primary"
                  :events="events"
                  :event-color="getEventColor"
                  :type="type"
                  @click:event="showEvent"
                  @change="updateRange"
              ></v-calendar>
              <v-menu
                  v-model="selectedOpen"
                  :close-on-content-click="false"
                  :activator="selectedElement"
                  offset-x
              >
                <v-card color="grey lighten-4" min-width="350px" flat>
                  <v-toolbar :color="selectedEvent.color" dark>
                    <v-btn icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-card-text>
                    <span v-html="selectedEvent.details"></span>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text color="secondary" @click="selectedOpen = false">
                      Cancel
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-sheet>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar"
import TopBar from "@/components/TopBar"
import PopupAddEvent from "@/components/PopupAddEvent";

export default {
  name: "Calendario",
  components: {TopBar, SideBar, PopupAddEvent},
  data: () => ({
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
    },
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: ['#A9A9A9', '#7B7B7B'],
    names: ['Clase online', 'Clase grupal', 'Evento', 'Gimnasio'],
  }),
  mounted() {
    this.$refs.calendar.checkChange()
  },
  methods: {
    getEventColor(event) {
      return event.color
    },
    prev() {
      this.$refs.calendar.prev()
    },
    next() {
      this.$refs.calendar.next()
    },
    showEvent({nativeEvent, event}) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => {
          this.selectedOpen = true
        }, 10)
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    updateRange({start, end}) {
      const events = []

      const min = new Date(`${start.date}T00:00:00`)
      const max = new Date(`${end.date}T23:59:59`)
      const days = (max.getTime() - min.getTime()) / 86400000
      const eventCount = this.rnd(days, days + 1)

      // FORMADOR DE EVENTOS RANDOM
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0
        const firstTimestamp = this.rnd(min.getTime(), max.getTime())
        const first = new Date(firstTimestamp - (firstTimestamp % 90000))
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 90000
        const second = new Date(first.getTime() + secondTimestamp)

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        })
      }

      this.events = events
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: "GothamMedium";
  src: url("../../assets/fonts/Gotham-Medium.ttf");
}

/* Para las propiedades de los botones del calendario */
.CustomButton {
  font-family: Gotham-Medium, sans-serif !important;
  font-size: 16px !important;
  text-transform: none !important;
}
</style>