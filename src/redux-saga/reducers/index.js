import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import PlacementReducer from "./PlacementReducer";
import TalentReducer from "./TalentReducer";
import HiringReducer from "./HiringReducer";

import CurriculumReducer from "./CurriculumReducer";
import AppCurriculumReducer from "./AppCurriculumReducer";

import BatchReducer from "./BatchReducer";
import AppBatchReducer from "./AppBatchReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  placemenState: PlacementReducer,
  curriculumState: CurriculumReducer,
  curriculumAppState: AppCurriculumReducer,
  talentState: TalentReducer,
  hiringState: HiringReducer,
  batchState: BatchReducer,
  batchAppState: AppBatchReducer,
});

export default rootReducer;
