import { MeetupView } from './MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

export const MeetupPage = {
  name: 'MeetupPage',

  template: `<meetup-view :meetup="meetup"></meetup-view>`,

  components: {
    MeetupView
  },

  data() {
    return {
      meetup: {}
    }
  },

  mounted() {
    this.getMeetup();
  },

  methods: {
    async getMeetup() {
      this.meetup = await fetchMeetup(MEETUP_ID);
    }
  }
};
