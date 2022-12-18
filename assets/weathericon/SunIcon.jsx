import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'
function SunIcon(props) {
    return (
        <Svg
            height={props.size}
            width={props.size}
            className=""
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 5V2h2v3h-2zm5.634.974l1.5-2.598 1.732 1-1.5 2.598-1.732-1zM16 23a7 7 0 100-14 7 7 0 000 14zm0 2a9 9 0 100-18 9 9 0 000 18zm11-10h3v2h-3v-2zm.624-6.866l-2.598 1.5 1 1.732 2.598-1.5-1-1.732zM8.134 4.376l1.5 2.598 1.732-1-1.5-2.598-1.732 1zm-2.16 6.99l-2.598-1.5 1-1.732 2.598 1.5-1 1.732zM15 27v3h2v-3h-2zM5 15H2v2h3v-2zm-1.624 7.134l2.598-1.5 1 1.732-2.598 1.5-1-1.732zm6.258 2.892l-1.5 2.598 1.732 1 1.5-2.598-1.732-1zm12.5 3.598l-1.5-2.598 1.732-1 1.5 2.598-1.732 1zm2.892-6.258l2.598 1.5 1-1.732-2.598-1.5-1 1.732z"
                fill="url(#paint0_linear_9_803)"
            />
            <Defs>
                <LinearGradient id="paint0_linear_9_803" x1={16} y1={2} x2={16} y2={30} gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#EFC977" />
                    <Stop offset={1} stopColor="#E07256" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}

export default SunIcon
