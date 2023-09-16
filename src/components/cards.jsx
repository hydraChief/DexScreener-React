import React from 'react';
import '../styles/cards.css'

function Cards(props){
    let date =new Date(props.data.pairCreatedAt).toDateString();
    let cards=<div className='cards'>
                <div className='card'>
                    <p className='heading'>Basic Info</p>
                    <table className='card-content'>
                        <tbody>
                            <tr>
                                <td>Pair created at</td>
                                <td className='ans'>: {date}</td>
                            </tr>
                            <tr>
                                <td>Symbol</td>
                                <td className='ans'>: {props.data.baseToken.symbol}</td>
                            </tr>
                            <tr>
                                <td>DexId</td>
                                <td className='ans'>: {props.data.dexId}</td>
                            </tr>
                            <tr>
                                <td>Pair Address</td>
                                <td className='ans'>: {props.data.pairAddress}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='card-type'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <p className='heading'>Base Token</p>
                    <table className='card-content'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td className='ans'>: {props.data.baseToken.name}</td>
                            </tr>
                            <tr>
                                <td>Symbol</td>
                                <td className='ans'>: {props.data.baseToken.symbol}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td className='ans'>:<span>{props.data.pairAddress}</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='card-type'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
                            <path d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8C13.14 8 14.17 8.48 14.9 9.24L19.97 6.43ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12ZM11 21.44L3 17V8.14L8.13 10.99C8.04 11.31 8 11.65 8 12C8 13.86 9.27 15.43 11 15.87V21.44ZM13 21.44V15.87C14.73 15.43 16 13.86 16 12C16 11.65 15.96 11.31 15.87 10.99L21 8.14V17L13 21.44Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <p className='heading'>Quote Token</p>
                    <table className='card-content'>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td className='ans'>: {props.data.quoteToken.name}</td>
                            </tr>
                            <tr>
                                <td>Symbol</td>
                                <td className='ans'>: {props.data.quoteToken.symbol}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td className='ans'>: {props.data.quoteToken.address}</td>
                            </tr>                 
                        </tbody>
                    </table>
                    <div className='card-type'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width="24" height="24">
                            <path d="M19.97 6.43L12 2L4.03 6.43L9.1 9.24C9.83 8.48 10.86 8 12 8C13.14 8 14.17 8.48 14.9 9.24L19.97 6.43ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12ZM11 21.44L3 17V8.14L8.13 10.99C8.04 11.31 8 11.65 8 12C8 13.86 9.27 15.43 11 15.87V21.44ZM13 21.44V15.87C14.73 15.43 16 13.86 16 12C16 11.65 15.96 11.31 15.87 10.99L21 8.14V17L13 21.44Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className='card'>
                    <p className='heading'>Price</p>
                    <table className='card-content'>
                        <tbody>
                            <tr>
                                <td>Price Native</td>
                                <td className='ans'>: {props.data.priceNative}</td>
                            </tr>
                            <tr>
                                <td>Price USD</td>
                                <td className='ans'>: {props.data.priceUsd}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='card-type'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.47645 6.83998C8.81525 7.33558 8.51646 7.92958 8.51646 8.48398C8.51646 9.03958 8.81525 9.63358 9.47645 10.1304C10.1389 10.6272 11.1085 10.9704 12.2305 10.9704C12.5487 10.9704 12.8539 11.0968 13.079 11.3218C13.304 11.5469 13.4305 11.8521 13.4305 12.1704C13.4305 12.4886 13.304 12.7939 13.079 13.0189C12.8539 13.2439 12.5487 13.3704 12.2305 13.3704C10.6393 13.3704 9.15246 12.888 8.03646 12.0504C6.92045 11.2128 6.11646 9.96478 6.11646 8.48518C6.11646 7.00438 6.92045 5.75638 8.03646 4.91878C9.15246 4.08238 10.6405 3.59998 12.2305 3.59998C14.6941 3.59998 17.0233 4.77958 17.9497 6.74398C18.0169 6.88659 18.0553 7.04105 18.0628 7.19853C18.0704 7.35601 18.0468 7.51343 17.9935 7.6618C17.9402 7.81017 17.8581 7.94658 17.7521 8.06325C17.6461 8.17992 17.5181 8.27457 17.3755 8.34178C17.2328 8.40899 17.0784 8.44745 16.9209 8.45497C16.7634 8.46248 16.606 8.43891 16.4576 8.38559C16.3093 8.33227 16.1729 8.25025 16.0562 8.14421C15.9395 8.03817 15.8449 7.91019 15.7777 7.76758C15.3577 6.87118 14.0473 5.99998 12.2317 5.99998C11.1097 5.99998 10.1389 6.34318 9.47645 6.83998Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5884 18.4996C15.2496 18.004 15.5472 17.41 15.5472 16.8556C15.5472 16.3 15.2496 15.7048 14.5872 15.2092C13.926 14.7124 12.9552 14.3692 11.8344 14.3692C11.5162 14.3692 11.2109 14.2427 10.9859 14.0177C10.7609 13.7926 10.6344 13.4874 10.6344 13.1692C10.6344 12.8509 10.7609 12.5457 10.9859 12.3206C11.2109 12.0956 11.5162 11.9692 11.8344 11.9692C13.4256 11.9692 14.9124 12.4516 16.0284 13.2892C17.1444 14.1268 17.9472 15.3748 17.9472 16.8544C17.9472 18.334 17.1444 19.5832 16.0272 20.4196C14.9112 21.2572 13.4256 21.7396 11.8344 21.7396C9.37083 21.7396 7.04042 20.56 6.11522 18.5944C5.97949 18.3065 5.96366 17.9765 6.07123 17.677C6.1788 17.3774 6.40096 17.1329 6.68882 16.9972C6.97669 16.8614 7.30669 16.8456 7.60622 16.9532C7.90575 17.0607 8.15029 17.2829 8.28602 17.5708C8.70842 18.4684 10.0188 19.3396 11.8344 19.3396C12.9564 19.3396 13.926 18.9964 14.5884 18.4996ZM12 2.19995C12.3183 2.19995 12.6235 2.32638 12.8486 2.55142C13.0736 2.77647 13.2 3.08169 13.2 3.39995V4.59995C13.2 4.91821 13.0736 5.22344 12.8486 5.44848C12.6235 5.67352 12.3183 5.79995 12 5.79995C11.6818 5.79995 11.3765 5.67352 11.1515 5.44848C10.9265 5.22344 10.8 4.91821 10.8 4.59995V3.39995C10.8 3.08169 10.9265 2.77647 11.1515 2.55142C11.3765 2.32638 11.6818 2.19995 12 2.19995Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 19.2C12.3183 19.2 12.6235 19.3264 12.8486 19.5514C13.0736 19.7765 13.2 20.0817 13.2 20.4V21.6C13.2 21.9182 13.0736 22.2234 12.8486 22.4485C12.6235 22.6735 12.3183 22.8 12 22.8C11.6818 22.8 11.3766 22.6735 11.1515 22.4485C10.9265 22.2234 10.8 21.9182 10.8 21.6V20.4C10.8 20.0817 10.9265 19.7765 11.1515 19.5514C11.3766 19.3264 11.6818 19.2 12 19.2Z" fill="white"/>
                        </svg>
                    </div>
                </div>
              </div>
    return (
        <>
        {cards}
        <div className='line'></div>
        </>);
}

export default Cards;