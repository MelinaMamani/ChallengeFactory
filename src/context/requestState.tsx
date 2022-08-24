import { useReducer } from 'react';
import requestContext from './requestContext';
import requestReducer from './requestReducer';
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
} from './types'

export const initialState = {
    accounts: {},
    assets: {},
    customers: {},
    datapoints: {},
    devices: {},
    documents: {},
    forms: {},
    invites: {},
    media: {},
    messages: {},
    namespaces: {},
    orders: {},
    patients: {},
    relationships: {},
    rules: {},
    templates: {},
    users: {},
    workflows: {},
}

interface Props {
    children: React.ReactNode
}

const RequestState = (props : Props) => {
    const [state, dispatch] = useReducer(requestReducer, initialState);

    const resetState = () => {
        dispatch({
        type: RESET_STATE,
        })
    }

    const setAccounts = (accounts : {}) => {
        dispatch({
        type: SET_ACCOUNTS,
        payload: accounts,
        })
    }

    const setAssets = (assets : {}) => {
        dispatch({
        type: SET_ASSETS,
        payload: assets,
        })
    }

    const setCustomers = (customers: {}) => {
        dispatch({
        type: SET_CUSTOMERS,
        payload: customers,
        })
    }

    const setDatapoints = (datapoints : {}) => {
        dispatch({
        type: SET_DATAPOINTS,
        payload: datapoints,
        })
    }

    const setDevices = (devices : {}) => {
        dispatch({
        type: SET_DEVICES,
        payload: devices,
        })
    }

    const setDocuments = (documents : {}) => {
        dispatch({
        type: SET_DOCUMENTS,
        payload: documents,
        })
    }

    const setForms = (forms : {}) => {
        dispatch({
        type: SET_FORMS,
        payload: forms,
        })
    }

    const setInvites = (invites : {}) => {
        dispatch({
        type: SET_INVITES,
        payload: invites,
        })
    }

    const setMedia = (media : {}) => {
        dispatch({
        type: SET_MEDIA,
        payload: media,
        })
    }

    const setMessages = (messages : {}) => {
        dispatch({
        type: SET_MESSAGES,
        payload: messages,
        })
    }

    const setNamespaces = (namespaces : {}) => {
        dispatch({
        type: SET_NAMESPACES,
        payload: namespaces,
        })
    }

    const setOrders = (orders : {}) => {
        dispatch({
        type: SET_ORDERS,
        payload: orders,
        })
    }

    const setPatients = (patients : {}) => {
        dispatch({
            type: SET_PATIENTS,
            payload: patients,
        })
    }

    const setRelations = (relationships : {}) => {
        dispatch({
            type: SET_RELATIONSH,
            payload: relationships,
        })
    }

    const setRules = (rules : {}) => {
        dispatch({
            type: SET_RULES,
            payload: rules,
        })
    }

    const setTemplates = (templates : {}) => {
        dispatch({
        type: SET_TEMPLATES,
        payload: templates,
        })
    }

    const setUsers = (users : {}) => {
        dispatch({
        type: SET_USERS,
        payload: users,
        })
    }

    const setWorkflows = (workflows : {}) => {
        dispatch({
        type: SET_WORK,
        payload: workflows,
        })
    }

    return (
        <requestContext.Provider
        value={{
            requestState: state,
            setAccounts,
            setAssets,
            setCustomers,
            setDatapoints,
            setDevices,
            setDocuments,
            setForms,
            setInvites,
            setMedia,
            setMessages,
            setNamespaces,
            setOrders,
            setPatients,
            setRelations,
            setRules,
            setTemplates,
            setUsers,
            setWorkflows,
            resetState,
        }}
        >
        {props.children}
        </requestContext.Provider>
  )
}

export default RequestState
