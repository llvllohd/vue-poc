import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCheckCircle,
  faStar,
  faInfoCircle,
  faMapMarkerAlt,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle, faStar, faInfoCircle, faMapMarkerAlt, faCaretDown);

Vue.component("fa-icon", FontAwesomeIcon);
