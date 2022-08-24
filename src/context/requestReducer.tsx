import {
    RESET_STATE,
    SET_ACCOUNTS,
    SET_ASSETS,
    SET_CUSTOMERS,
    SET_DATAPOINTS,
    SET_DEVICES,
    SET_DOCUMENTS,
    SET_FORMS,
    SET_INVITES,
    SET_MEDIA,
    SET_MESSAGES,
    SET_NAMESPACES,
    SET_ORDERS,
    SET_PATIENTS,
    SET_RELATIONSH,
    SET_RULES,
    SET_TEMPLATES,
    SET_USERS,
    SET_WORK
} from './types';
  
import { initialState } from './requestState';

const requestReducer = (state : any, action : any) => {
    switch (action.type) {
      case RESET_STATE:
        return initialState
  
      case SET_ACCOUNTS:
        return {
          ...state,
          accounts: action.payload,
        }
  
      case SET_ASSETS:
        return {
          ...state,
          assets: action.payload,
        }
  
      case SET_CUSTOMERS:
        return {
          ...state,
          customers: action.payload,
        }
  
      case SET_DATAPOINTS:
        return {
          ...state,
          datapoints: action.payload,
        }
  
      case SET_DEVICES:
        return {
          ...state,
          devices: action.payload,
        }
      
      case SET_DOCUMENTS:
        return {
          ...state,
          documents: action.payload,
        }
  
      case SET_FORMS:
        return {
          ...state,
          forms: action.payload,
        }
      
      case SET_INVITES:
        return {
          ...state,
          invites: action.payload,
        }
  
      case SET_MEDIA:
        return {
          ...state,
          media: action.payload,
        }
  
      case SET_MESSAGES:
        return {
          ...state,
          messages: action.payload,
        }
      
      case SET_NAMESPACES:
        return {
          ...state,
          namespaces: action.payload,
        }

      case SET_ORDERS:
        return {
          ...state,
          orders: action.payload,
        }
  
      case SET_PATIENTS:
        return {
          ...state,
          patients: action.payload,
        }
      
      case SET_RELATIONSH:
        return {
          ...state,
          relationships: action.payload,
        }

      case SET_RULES:
        return {
          ...state,
          rules: action.payload,
        }

      case SET_TEMPLATES:
        return {
          ...state,
          templates: action.payload,
        }
  
      case SET_USERS:
        return {
          ...state,
          users: action.payload,
        }
      
      case SET_WORK:
        return {
          ...state,
          workflows: action.payload,
        }
  
      default:
        return state
    }
}

export default requestReducer
  