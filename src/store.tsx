import { applyMiddleware, combineReducers, createStore, Store, AnyAction } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppState from './states/AppState';
import AddAPIKeysReducer from './reducers/AddAPIKeysReducer';
import SendSmsReducer from './reducers/SendSmsReducer';
import SmsReportReducer from './reducers/SmsReportReducer';



const rootReducer = combineReducers<AppState>({
    addAPIState: AddAPIKeysReducer,
    sendSmsState: SendSmsReducer,
    smsReportState: SmsReportReducer
});

export default function configureStore(): Store<AppState, AnyAction> {
    return createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));
}