import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import logo from './img/logo_e_wordmark.png';

export default function Header() {
    return (
        <header className="homeHeader">
            <nav class="cabecalho">
                <Link to="/">
                    <div class="logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                </Link>
                <div class="icon-pesquisa">
                    <svg class="icon-lupa" xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                        <path
                            d="M40.7149 33.3688L33.1683 25.8586C32.9729 25.664 32.741 25.5097 32.4857 25.4044C32.2304 25.2991 31.9568 25.2449 31.6804 25.2449C31.404 25.2449 31.1304 25.2991 30.8751 25.4044C30.6198 25.5097 30.3879 25.664 30.1925 25.8586L29.5759 26.472L26.6263 23.5366C28.8673 20.5574 29.891 16.844 29.4913 13.1439C29.0916 9.44378 27.2982 6.03173 24.4722 3.59469C21.6461 1.15764 17.9973 -0.123428 14.2603 0.00938354C10.5232 0.142195 6.97548 1.67903 4.33131 4.31048C1.68714 6.94193 0.142882 10.4726 0.00942889 14.1917C-0.124025 17.9107 1.16324 21.542 3.61206 24.3545C6.06089 27.1669 9.48942 28.9517 13.2074 29.3494C16.9254 29.7472 20.6568 28.7284 23.6503 26.4982L26.6 29.4337L25.9836 30.0473C25.7881 30.2417 25.633 30.4725 25.5272 30.7266C25.4213 30.9807 25.3669 31.253 25.3669 31.528C25.3669 31.803 25.4213 32.0754 25.5272 32.3295C25.633 32.5835 25.7881 32.8143 25.9836 33.0087L33.53 40.5191C34.4828 41.4673 35.7751 42 37.1225 42C38.4699 42 39.7622 41.4673 40.7149 40.5191C41.6677 39.5709 42.203 38.2849 42.203 36.9439C42.203 35.603 41.6677 34.317 40.7149 33.3688ZM4.3221 14.7731C4.3221 12.702 4.93923 10.6774 6.09545 8.9553C7.25167 7.23322 8.89505 5.89102 10.8178 5.09843C12.7405 4.30585 14.8562 4.09847 16.8973 4.50253C18.9385 4.90659 20.8134 5.90393 22.285 7.36844C23.7566 8.83295 24.7588 10.6988 25.1648 12.7302C25.5708 14.7615 25.3624 16.867 24.566 18.7805C23.7696 20.694 22.4209 22.3295 20.6905 23.4801C18.9601 24.6308 16.9257 25.2449 14.8445 25.2449C12.0548 25.2417 9.3803 24.1373 7.40768 22.1742C5.43505 20.2111 4.32539 17.5494 4.3221 14.7731ZM37.739 37.5575C37.5751 37.7195 37.3535 37.8105 37.1225 37.8105C36.8915 37.8105 36.6698 37.7195 36.506 37.5575L30.4474 31.528L31.6804 30.3009L37.739 36.3304C37.9024 36.4932 37.9941 36.7139 37.9941 36.9439C37.9941 37.174 37.9024 37.3947 37.739 37.5575Z"
                            fill="#FFFFFF" />
                    </svg>
                </div>
                <div class="barra-de-pesquisa">
                    <svg class="icon-lupa" xmlns="http://www.w3.org/2000/svg" width="43" height="42" viewBox="0 0 43 42" fill="none">
                        <path
                            d="M40.7149 33.3688L33.1683 25.8586C32.9729 25.664 32.741 25.5097 32.4857 25.4044C32.2304 25.2991 31.9568 25.2449 31.6804 25.2449C31.404 25.2449 31.1304 25.2991 30.8751 25.4044C30.6198 25.5097 30.3879 25.664 30.1925 25.8586L29.5759 26.472L26.6263 23.5366C28.8673 20.5574 29.891 16.844 29.4913 13.1439C29.0916 9.44378 27.2982 6.03173 24.4722 3.59469C21.6461 1.15764 17.9973 -0.123428 14.2603 0.00938354C10.5232 0.142195 6.97548 1.67903 4.33131 4.31048C1.68714 6.94193 0.142882 10.4726 0.00942889 14.1917C-0.124025 17.9107 1.16324 21.542 3.61206 24.3545C6.06089 27.1669 9.48942 28.9517 13.2074 29.3494C16.9254 29.7472 20.6568 28.7284 23.6503 26.4982L26.6 29.4337L25.9836 30.0473C25.7881 30.2417 25.633 30.4725 25.5272 30.7266C25.4213 30.9807 25.3669 31.253 25.3669 31.528C25.3669 31.803 25.4213 32.0754 25.5272 32.3295C25.633 32.5835 25.7881 32.8143 25.9836 33.0087L33.53 40.5191C34.4828 41.4673 35.7751 42 37.1225 42C38.4699 42 39.7622 41.4673 40.7149 40.5191C41.6677 39.5709 42.203 38.2849 42.203 36.9439C42.203 35.603 41.6677 34.317 40.7149 33.3688ZM4.3221 14.7731C4.3221 12.702 4.93923 10.6774 6.09545 8.9553C7.25167 7.23322 8.89505 5.89102 10.8178 5.09843C12.7405 4.30585 14.8562 4.09847 16.8973 4.50253C18.9385 4.90659 20.8134 5.90393 22.285 7.36844C23.7566 8.83295 24.7588 10.6988 25.1648 12.7302C25.5708 14.7615 25.3624 16.867 24.566 18.7805C23.7696 20.694 22.4209 22.3295 20.6905 23.4801C18.9601 24.6308 16.9257 25.2449 14.8445 25.2449C12.0548 25.2417 9.3803 24.1373 7.40768 22.1742C5.43505 20.2111 4.32539 17.5494 4.3221 14.7731ZM37.739 37.5575C37.5751 37.7195 37.3535 37.8105 37.1225 37.8105C36.8915 37.8105 36.6698 37.7195 36.506 37.5575L30.4474 31.528L31.6804 30.3009L37.739 36.3304C37.9024 36.4932 37.9941 36.7139 37.9941 36.9439C37.9941 37.174 37.9024 37.3947 37.739 37.5575Z"
                            fill="#999999" />
                    </svg>
                    <div class="placeholder-pesquisa">
                        <p>O que seu pet precisa?</p>
                    </div>
                </div>
                <div class="icons">
                    <svg class="carrinho-icon" xmlns="http://www.w3.org/2000/svg" width="44" height="45" viewBox="0 0 44 45" fill="none">
                        <path d="M41.0553 33.7493H7.56281C7.27627 33.7493 7.00147 33.6307 6.79885 33.4198C6.59624 33.2088 6.48241 32.9226 6.48241 32.6243C6.48241 32.3259 6.59624 32.0398 6.79885 31.8288C7.00147 31.6178 7.27627 31.4993 7.56281 31.4993H34.5729C35.0263 31.4993 35.4683 31.3508 35.8362 31.0748C36.2041 30.7987 36.4793 30.4092 36.6228 29.9612L43.1052 9.71169C43.2133 9.37345 43.2427 9.01332 43.191 8.66094C43.1393 8.30855 43.008 7.97399 42.8078 7.6848C42.6076 7.3956 42.3444 7.16004 42.0397 6.99749C41.735 6.83495 41.3976 6.75007 41.0553 6.74985H9.79038L8.57839 1.70389C8.46146 1.21722 8.19168 0.7852 7.81192 0.47648C7.43216 0.167761 6.9642 5.08656e-05 6.48241 0H0V4.4999H4.79526L10.1973 26.9994H7.56281C6.13011 26.9994 4.75609 27.592 3.74301 28.6469C2.72994 29.7018 2.1608 31.1325 2.1608 32.6243C2.1608 34.1161 2.72994 35.5468 3.74301 36.6017C4.75609 37.6565 6.13011 38.2492 7.56281 38.2492H8.75255C8.59218 39.0665 8.6084 39.9107 8.80004 40.7206C8.99167 41.5306 9.35392 42.286 9.86054 42.9322C10.3672 43.5784 11.0055 44.0992 11.7292 44.4568C12.453 44.8145 13.2441 45 14.0452 45C14.8463 45 15.6374 44.8145 16.3612 44.4568C17.085 44.0992 17.7233 43.5784 18.2299 42.9322C18.7365 42.286 19.0988 41.5306 19.2904 40.7206C19.482 39.9107 19.4983 39.0665 19.3379 38.2492H26.039C25.8786 39.0665 25.8948 39.9107 26.0865 40.7206C26.2781 41.5306 26.6403 42.286 27.147 42.9322C27.6536 43.5784 28.2919 44.0992 29.0157 44.4568C29.7394 44.8145 30.5305 45 31.3316 45C32.1328 45 32.9239 44.8145 33.6476 44.4568C34.3714 44.0992 35.0097 43.5784 35.5163 42.9322C36.023 42.286 36.3852 41.5306 36.5768 40.7206C36.7685 39.9107 36.7847 39.0665 36.6243 38.2492H41.0553C41.6283 38.2492 42.178 38.0121 42.5832 37.5902C42.9884 37.1682 43.2161 36.5959 43.2161 35.9992C43.2161 35.4025 42.9884 34.8302 42.5832 34.4083C42.178 33.9863 41.6283 33.7493 41.0553 33.7493Z" fill="white" />
                    </svg>

                    <svg class="coracao-icon" xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 50 45" fill="none">
                        <path d="M45.9889 23.3865L27.1403 44.0664C26.8725 44.3602 26.5449 44.5952 26.1789 44.756C25.8128 44.9169 25.4164 45 25.0156 45C24.6148 45 24.2184 44.9169 23.8524 44.756C23.4863 44.5952 23.1587 44.3602 22.8909 44.0664L4.03943 23.3839C1.56051 20.6682 0.255789 17.1065 0.403089 13.4573C0.55039 9.80813 2.13807 6.35973 4.82806 3.84642C7.51805 1.33311 11.0978 -0.0465598 14.8051 0.00119985C18.5124 0.0489595 22.0543 1.52037 24.6767 4.10212L25.0156 4.43963L25.3445 4.11281C27.9653 1.5277 31.5072 0.0528962 35.2157 0.00264964C38.9243 -0.0475969 42.5061 1.33069 45.198 3.84382C47.8899 6.35694 49.479 9.8062 49.6268 13.4566C49.7745 17.107 48.4692 20.6702 45.9889 23.3865Z" fill="white" />
                    </svg>

                    <Link to="/login">
                        <svg class="user-icon" xmlns="http://www.w3.org/2000/svg" width="37" height="45" viewBox="0 0 37 45" fill="none">
                            <path d="M18.4322 20C23.9828 20 28.4825 15.5228 28.4825 10C28.4825 4.47715 23.9828 0 18.4322 0C12.8816 0 8.38196 4.47715 8.38196 10C8.38196 15.5228 12.8816 20 18.4322 20Z" fill="white" />
                            <path d="M35.755 33.883L35.2251 32.826C33.6658 29.7229 31.2688 27.1132 28.3028 25.2893C25.3368 23.4654 21.9189 22.4993 18.4322 22.4993C14.9454 22.4993 11.5275 23.4654 8.56153 25.2893C5.59551 27.1132 3.19855 29.7229 1.63921 32.826L1.10931 33.8818C0.93472 34.2289 0.843955 34.6118 0.844239 35V42.5C0.844239 43.163 1.10896 43.7989 1.58015 44.2678C2.05135 44.7366 2.69043 45 3.3568 45H33.5075C34.1739 45 34.813 44.7366 35.2842 44.2678C35.7554 43.7989 36.0201 43.163 36.0201 42.5V35C36.0202 34.6122 35.9294 34.2298 35.755 33.883Z" fill="white" />
                        </svg>
                    </Link>
                </div>
            </nav>
            <div class="categorias">
                <div class="links">
                    <a href="" class="animais-link">
                        <p>Cachorros</p>
                    </a>
                    <a href="" class="animais-link">
                        <p>Gatos</p>
                    </a>
                    <a href="" class="animais-link">
                        <p>Pássaros</p>
                    </a>
                    <a href="" class="animais-link">
                        <p>Peixes</p>
                    </a>
                    <a href="" class="animais-link">
                        <p>Outros</p>
                    </a>
                    <a href="" class="animais-link">
                        <p>Casa&Lazer</p>
                    </a>
                </div>
            </div>
        </header>
    );
}
