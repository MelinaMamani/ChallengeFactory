import { useEffect, useContext } from 'react';
import { reqResApi, reqResApiCors } from '../api/reqRes';
import { State } from '../interface/reqRes';
import requestContext from '../context/requestContext';
import Card from './Card';

const CardContainer = () => {
    const { 
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
            setWorkflows } = useContext(requestContext);

    const loadCards = async() => {
        await reqResApi.get<State>('/accounts/health/status')
        .then((resAccount) => setAccounts(resAccount.data))
        .catch((error) => setAccounts({success: false, message: 'Error'}));
        await reqResApi.get<State>('/assets/health/status')
        .then((resAssets) => setAssets(resAssets.data))
        .catch((error) => setAssets({success: false, message: 'Error'}));
        await reqResApi.get<State>('/customers/health/status')
        .then((resCustomers) => setCustomers(resCustomers.data))
        .catch((error) => setCustomers({success: false, message: 'Error'}));
        await reqResApi.get<State>('/datapoints/health/status')
        .then((resDatapoints) => setDatapoints(resDatapoints.data))
        .catch((error) => setDatapoints({success: false, message: 'Error'}));
        await reqResApi.get<State>('/devices/health/status')
        .then((resDevices) => setDevices(resDevices.data))
        .catch((error) => setDevices({success: false, message: 'Error'}));
        await reqResApi.get<State>('/documents/health/status')
        .then((resDocuments) => setDocuments(resDocuments.data))
        .catch((error) => setDocuments({success: false, message: 'Error'}));
        await reqResApi.get<State>('/forms/health/status')
        .then((resForms) => setForms(resForms.data))
        .catch((error) => setForms({success: false, message: 'Error'}));
        await reqResApiCors.get<State>('/invites/health/status')
        .then((resInvites) => setInvites(resInvites.data))
        .catch((error) => setInvites({success: false, message: 'Error', hostname: 'INVITES'}));
        await reqResApi.get<State>('/media/health/status')
        .then((resMedia) => setMedia(resMedia.data))
        .catch((error) => setMedia({success: false, message: 'Error'}));
        await reqResApi.get<State>('/messages/health/status')
        .then((resMessages) => setMessages(resMessages.data))
        .catch((error) => setMessages({success: false, message: 'Error', hostname: 'MESSAGES'}));
        await reqResApi.get<State>('/namespaces/health/status')
        .then((resNS) => setNamespaces(resNS.data))
        .catch((error) => setNamespaces({success: false, message: 'Error'}));
        await reqResApi.get<State>('/orders/health/status')
        .then((resOrders) => setOrders(resOrders.data))
        .catch((error) => setOrders({success: false, message: 'Error'}));
        await reqResApi.get<State>('/patients/health/status')
        .then((resPatients) => setPatients(resPatients.data))
        .catch((error) => setPatients({success: false, message: 'Error'}));
        await reqResApi.get<State>('/relationships/health/status')
        .then((resRel) => setRelations(resRel.data))
        .catch((error) => setRelations({success: false, message: 'Error'}));
        await reqResApi.get<State>('/rules/health/status')
        .then((resRules) => setRules(resRules.data))
        .catch((error) => setRules({success: false, message: 'Error'}));
        await reqResApi.get<State>('/templates/health/status')
        .then((resTemplates) => setTemplates(resTemplates.data))
        .catch((error) => setTemplates({success: false, message: 'Error'}));
        await reqResApiCors.get<State>('/users/health/status')
        .then((resUsers) => setUsers(resUsers.data))
        .catch((error) => setUsers({success: false, message: 'Error', hostname: 'USERS'}));
        await reqResApi.get<State>('/workflows/health/status')
        .then((resWorkf) => setWorkflows(resWorkf.data))
        .catch((error) => setWorkflows({success: false, message: 'Error'}));
    }

    const loadState = () => {
        loadCards();
        try {
            setInterval(async () => {
                loadCards();
            }, 15000);
            } catch (e) {
            console.log(e);
        }     
    }

    useEffect(() => {
        loadState();
    }, []);

    return (
        <div className="flex flex-row flex-wrap justify-start p-8 gap-5">
            <Card/>
        </div>
    )
}

export default CardContainer;