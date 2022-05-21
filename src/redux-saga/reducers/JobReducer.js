import * as ActionType from '../constants/Job'

const INIT_STATE={
    jobs:[],
    status:{},

};

const JobReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_JOB_REQUEST:
            return {
                ...state,
                status:""
        };
          
        case ActionType.GET_JOB_SUCCEED: {
            return GetJobSucceed(state,action)
        }

        case ActionType.ADD_JOB_REQUEST: {
            return {
              ...state,
              status:""
              
            };
        }
          
        case ActionType.ADD_JOB_SUCCEED: {
           return GetAddJobSucceed(state, action);
        }

        case ActionType.DELETE_JOB_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isRefresh: false
            }
        }
        case ActionType.DELETE_JOB_SUCCEED: {
            return applyDeleteJobSucceed(state,action)
        } 

        
        default:
            return state;
    }
};

const GetJobSucceed = (state,action)=>{
    return{
        ...state,
        jobs:action.payload,
    }
}

const GetAddJobSucceed = (state, action) => {
    const hasil = action.payload
    return {
      ...state,
      jobs:hasil,
      status: hasil
    };
  };

  const applyDeleteJobSucceed = (state, action) => {
    const { payload } = action;
    const filterJob= state.jobs.filter(el => el.jobs_id !== payload)
    return {
        ...state,
        jobs : [...filterJob],
    }
}


export default JobReducer