import { useContext } from 'react';
import requestContext from '../context/requestContext';
import moment from 'moment';

const Card = () => {

    const { requestState } = useContext(requestContext);

    const unixToString = (date : number) => {
      return moment.unix(date).format('hh:mm:ss a').toString();
    }

    const nameState = (hostname : string) => {
      return hostname?.split('-')[0].toUpperCase();
    }

    return (
      <>
      {Object.keys(requestState).map((item,i) => 
        requestState[item].success
            ? (
              <div
                key={i}
                className="text-center shadow-black shadow-sm rounded-md w-[15rem] py-2 bg-lime-50">
                <p className="text-2xl">{nameState(requestState[item].hostname)}</p>
                <p className="text-white bg-green-500">{requestState[item].message}</p>
                <p>{requestState[item].hostname}</p>
                <p>{unixToString(requestState[item].time)}</p>
              </div>
              )
            : (
              <div
                key={i}
                className="text-center shadow-black shadow-sm rounded-md w-[15rem] py-2 bg-red-50">
                <p className="text-2xl">{requestState[item].hostname}</p>
                <p className="text-white bg-red-500">{requestState[item].message}</p>
                <p>OUTAGE</p>
                <p>503 Error</p>
              </div>
            )
      )}
      </>
    )
}

export default Card;