import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export default function ProactiveIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 66 66">
      <path
        d="M33 53.3C33.5695 53.3 34.0312 52.8411 34.0312 52.275C34.0312 51.7089 33.5695 51.25 33 51.25C32.4305 51.25 31.9688 51.7089 31.9688 52.275C31.9688 52.8411 32.4305 53.3 33 53.3Z"
        fill="#4AC3FF"
      />
      <path
        d="M58.0955 23.0112H54.9656C54.4365 20.9753 53.6206 19.0239 52.5422 17.2149L54.7542 15.0214C55.1158 14.6574 55.3948 14.2208 55.5727 13.7408C55.7506 13.2608 55.8231 12.7486 55.7855 12.2385C55.7143 11.193 55.2592 10.21 54.5067 9.47612L52.3205 7.30825C50.7117 5.71438 48.1955 5.60675 46.7311 7.06737L44.5191 9.26087C42.694 8.18796 40.7254 7.37701 38.6719 6.85212V3.77712C38.6719 1.681 36.8208 0 34.5469 0H31.4531C29.1792 0 27.3281 1.681 27.3281 3.7515V6.8265C25.2748 7.34978 23.3063 8.15899 21.4809 9.23012L19.2689 7.03662C17.7942 5.576 15.2883 5.68362 13.6744 7.2775L11.4881 9.44537C10.6785 10.2353 10.2152 11.3109 10.1991 12.4384C10.1922 12.912 10.2798 13.3823 10.4568 13.8221C10.6338 14.262 10.8967 14.6626 11.2303 15.0009L13.4423 17.1944C12.3671 19.0104 11.5563 20.9689 11.0344 23.0112H7.90453C5.84203 23.0112 4.125 24.846 4.125 27.1112V30.1863C4.125 32.4464 5.82141 34.2863 7.90453 34.2863H11.0344C11.5634 36.3222 12.3793 38.2736 13.4578 40.0826L11.2406 42.2761C10.907 42.6144 10.6442 43.015 10.4672 43.4549C10.2902 43.8947 10.2025 44.365 10.2094 44.8386C10.2247 45.9678 10.688 47.0453 11.4984 47.8367L13.6847 50.0046C15.2934 51.5934 17.8097 51.7061 19.2792 50.2455L21.3417 48.1955L22.6308 49.4614C22.8279 49.6371 23.0854 49.7307 23.3501 49.7229C23.6147 49.7151 23.8662 49.6063 24.0524 49.4193C24.2387 49.2322 24.3454 48.9811 24.3504 48.718C24.3555 48.4549 24.2586 48.1999 24.0797 48.0059L22.0584 46.0225C21.8652 45.8316 21.6038 45.7244 21.3314 45.7244C21.059 45.7244 20.7976 45.8316 20.6044 46.0225L17.82 48.79C17.1497 49.4511 15.9431 49.3435 15.1387 48.5491L12.9525 46.3812C12.5322 45.9769 12.2878 45.425 12.2719 44.8438C12.2673 44.6408 12.3032 44.4389 12.3775 44.2498C12.4519 44.0606 12.5632 43.888 12.705 43.7419L15.4687 40.9436C15.6359 40.7781 15.7409 40.5606 15.7663 40.3275C15.7916 40.0943 15.7357 39.8595 15.608 39.6624C14.2906 37.6239 13.3511 35.3675 12.8339 32.9999C12.7825 32.7677 12.6516 32.5605 12.4635 32.4137C12.2754 32.2669 12.0418 32.1897 11.8027 32.1952H7.90453C6.95578 32.1952 6.1875 31.2779 6.1875 30.1452V27.0702C6.1875 25.9427 6.96094 25.0202 7.90453 25.0202H11.8594C12.0985 25.0258 12.3321 24.9486 12.5202 24.8018C12.7083 24.655 12.8393 24.4478 12.8906 24.2156C13.4073 21.8479 14.3468 19.5913 15.6647 17.5531C15.7925 17.356 15.8483 17.1212 15.823 16.888C15.7977 16.6549 15.6926 16.4374 15.5255 16.2719L12.7359 13.5044C12.5926 13.358 12.48 13.1848 12.4047 12.9947C12.3295 12.8046 12.2931 12.6016 12.2977 12.3974C12.3131 11.816 12.5575 11.2639 12.9783 10.8599L15.1645 8.692C15.9741 7.8925 17.1755 7.78487 17.8458 8.446L20.6302 11.2135C20.7963 11.3784 21.0142 11.482 21.2476 11.5072C21.4811 11.5323 21.7162 11.4775 21.9141 11.3519C23.9657 10.045 26.2357 9.11295 28.6172 8.59975C28.8258 8.54694 29.0125 8.43058 29.1512 8.26698C29.2899 8.10339 29.3736 7.90076 29.3906 7.6875V3.7515C29.3906 2.81363 30.3187 2.05 31.4531 2.05H34.5469C35.6864 2.05 36.6094 2.81363 36.6094 3.7515V7.6875C36.604 7.92586 36.6825 8.15861 36.8312 8.3457C36.9799 8.53278 37.1895 8.66249 37.4241 8.7125C39.8055 9.2257 42.0756 10.1577 44.1272 11.4646C44.3296 11.5813 44.566 11.6262 44.7974 11.5917C45.0289 11.5572 45.2416 11.4456 45.4008 11.275L48.1903 8.5075C48.8606 7.84125 50.062 7.94887 50.8664 8.74837L53.0527 10.9162C53.447 11.2962 53.6873 11.8069 53.7281 12.3512C53.7486 12.5728 53.7205 12.7961 53.6458 13.0058C53.571 13.2155 53.4513 13.4066 53.295 13.5659L50.5312 16.3385C50.3641 16.504 50.2591 16.7215 50.2337 16.9547C50.2084 17.1878 50.2643 17.4226 50.392 17.6198C51.7091 19.6584 52.6486 21.9147 53.1661 24.2822C53.2174 24.5144 53.3484 24.7216 53.5365 24.8684C53.7246 25.0152 53.9582 25.0924 54.1973 25.0869H58.1367C59.0855 25.0869 59.8537 26.0042 59.8537 27.1369V30.2119C59.8537 31.3394 59.0803 32.2619 58.1367 32.2619H54.1406C53.9015 32.2563 53.6679 32.3336 53.4798 32.4803C53.2917 32.6271 53.1607 32.8343 53.1094 33.0665C52.5898 35.4342 51.6485 37.6905 50.3302 39.729C50.2024 39.9262 50.1465 40.1609 50.1718 40.3941C50.1972 40.6273 50.3022 40.8447 50.4694 41.0102L53.2589 43.7777C53.4152 43.937 53.5349 44.1281 53.6097 44.3378C53.6845 44.5475 53.7125 44.7708 53.692 44.9924C53.6508 45.5367 53.4105 46.0471 53.0166 46.4274L50.8303 48.5952C50.0259 49.3947 48.8245 49.5024 48.1542 48.8413L45.3647 46.0737C45.1715 45.8828 44.9101 45.7757 44.6376 45.7757C44.3652 45.7757 44.1038 45.8828 43.9106 46.0737L41.9306 48.0212C41.7517 48.2153 41.6548 48.4703 41.6599 48.7334C41.665 48.9965 41.7717 49.2476 41.9579 49.4347C42.1441 49.6217 42.3956 49.7304 42.6602 49.7383C42.9249 49.7461 43.1824 49.6525 43.3795 49.4767L44.6686 48.175L46.7311 50.225C47.0715 50.5566 47.4745 50.8179 47.917 50.9938C48.3595 51.1697 48.8327 51.2568 49.3092 51.25C50.4457 51.2393 51.5318 50.7825 52.3308 49.979L54.517 47.8111C55.2691 47.077 55.7241 46.0941 55.7958 45.0487C55.8334 44.5386 55.7609 44.0264 55.583 43.5464C55.4051 43.0665 55.1261 42.6299 54.7645 42.2659L52.5525 40.0724C53.6306 38.2632 54.4465 36.3118 54.9759 34.276H58.1006C60.1631 34.276 61.8801 32.4412 61.8801 30.176V27.101C61.875 24.8511 60.1786 23.0112 58.0955 23.0112Z"
        fill="#4AC3FF"
      />
      <path
        d="M41.7656 51.7625C41.4921 51.7625 41.2298 51.8705 41.0364 52.0627C40.843 52.2549 40.7344 52.5157 40.7344 52.7875V55.2014C40.728 55.2448 40.7053 55.2843 40.6709 55.3119C40.6365 55.3394 40.5928 55.353 40.5487 55.35H25.9669C25.9228 55.353 25.8792 55.3394 25.8447 55.3119C25.8103 55.2843 25.7876 55.2448 25.7812 55.2014V52.7875C25.7812 52.5157 25.6726 52.2549 25.4792 52.0627C25.2858 51.8705 25.0235 51.7625 24.75 51.7625C24.4765 51.7625 24.2142 51.8705 24.0208 52.0627C23.8274 52.2549 23.7188 52.5157 23.7188 52.7875V55.2014C23.7242 55.789 23.964 56.3506 24.3854 56.7627C24.8069 57.1749 25.3756 57.4041 25.9669 57.4H40.5487C41.14 57.4041 41.7088 57.1749 42.1302 56.7627C42.5517 56.3506 42.7914 55.789 42.7969 55.2014V52.7875C42.7969 52.5157 42.6882 52.2549 42.4948 52.0627C42.3014 51.8705 42.0391 51.7625 41.7656 51.7625Z"
        fill="#4AC3FF"
      />
      <path
        d="M39.1875 59.45H26.8125C26.539 59.45 26.2767 59.558 26.0833 59.7502C25.8899 59.9424 25.7812 60.2031 25.7812 60.475C25.7812 60.7468 25.8899 61.0076 26.0833 61.1998C26.2767 61.392 26.539 61.5 26.8125 61.5H39.1875C39.461 61.5 39.7233 61.392 39.9167 61.1998C40.1101 61.0076 40.2188 60.7468 40.2188 60.475C40.2188 60.2031 40.1101 59.9424 39.9167 59.7502C39.7233 59.558 39.461 59.45 39.1875 59.45Z"
        fill="#4AC3FF"
      />
      <path
        d="M37.125 63.55H28.875C28.6015 63.55 28.3392 63.658 28.1458 63.8502C27.9524 64.0424 27.8438 64.3032 27.8438 64.575C27.8438 64.8469 27.9524 65.1076 28.1458 65.2998C28.3392 65.492 28.6015 65.6 28.875 65.6H37.125C37.3985 65.6 37.6608 65.492 37.8542 65.2998C38.0476 65.1076 38.1562 64.8469 38.1562 64.575C38.1562 64.3032 38.0476 64.0424 37.8542 63.8502C37.6608 63.658 37.3985 63.55 37.125 63.55Z"
        fill="#4AC3FF"
      />
      <path
        d="M33 39.852C35.1171 39.852 37.1867 39.228 38.947 38.0589C40.7073 36.8898 42.0793 35.2282 42.8895 33.2841C43.6997 31.34 43.9117 29.2007 43.4987 27.1368C43.0856 25.073 42.0661 23.1772 40.5691 21.6892C39.0721 20.2013 37.1647 19.188 35.0883 18.7774C33.0118 18.3669 30.8596 18.5776 28.9036 19.3829C26.9476 20.1882 25.2758 21.5519 24.0996 23.3015C22.9234 25.0512 22.2956 27.1082 22.2956 29.2125C22.2983 32.0335 23.427 34.7381 25.4338 36.7328C27.4407 38.7275 30.1618 39.8493 33 39.852ZM33 20.6281C34.7094 20.6281 36.3804 21.132 37.8017 22.0761C39.2229 23.0201 40.3306 24.3619 40.9845 25.9318C41.6384 27.5016 41.8093 29.2289 41.4754 30.8953C41.1416 32.5616 40.318 34.0921 39.1089 35.2931C37.8998 36.4942 36.3595 37.3119 34.6828 37.6427C33.0061 37.9736 31.2683 37.8027 29.6893 37.1518C28.1103 36.5009 26.761 35.3992 25.812 33.986C24.863 32.5728 24.3571 30.9116 24.3581 29.2125C24.3608 26.9353 25.2722 24.7521 26.8923 23.1418C28.5123 21.5316 30.7088 20.6257 33 20.623V20.6281Z"
        fill="#4AC3FF"
      />
      <path
        d="M34.0312 15.375V12.3C34.0312 12.0281 33.9226 11.7674 33.7292 11.5752C33.5358 11.383 33.2735 11.275 33 11.275C32.7265 11.275 32.4642 11.383 32.2708 11.5752C32.0774 11.7674 31.9688 12.0281 31.9688 12.3V15.375C31.9688 15.6468 32.0774 15.9076 32.2708 16.0998C32.4642 16.292 32.7265 16.4 33 16.4C33.2735 16.4 33.5358 16.292 33.7292 16.0998C33.9226 15.9076 34.0312 15.6468 34.0312 15.375Z"
        fill="#4AC3FF"
      />
      <path
        d="M34.0312 43.05C34.0312 42.7781 33.9226 42.5174 33.7292 42.3252C33.5358 42.133 33.2735 42.025 33 42.025C32.7265 42.025 32.4642 42.133 32.2708 42.3252C32.0774 42.5174 31.9688 42.7781 31.9688 43.05V46.125C31.9688 46.3968 32.0774 46.6576 32.2708 46.8498C32.4642 47.042 32.7265 47.15 33 47.15C33.2735 47.15 33.5358 47.042 33.7292 46.8498C33.9226 46.6576 34.0312 46.3968 34.0312 46.125V43.05Z"
        fill="#4AC3FF"
      />
      <path
        d="M46.9219 30.2375H50.0156C50.2891 30.2375 50.5514 30.1295 50.7448 29.9373C50.9382 29.7451 51.0469 29.4843 51.0469 29.2125C51.0469 28.9407 50.9382 28.6799 50.7448 28.4877C50.5514 28.2955 50.2891 28.1875 50.0156 28.1875H46.9219C46.6484 28.1875 46.3861 28.2955 46.1927 28.4877C45.9993 28.6799 45.8906 28.9407 45.8906 29.2125C45.8906 29.4843 45.9993 29.7451 46.1927 29.9373C46.3861 30.1295 46.6484 30.2375 46.9219 30.2375Z"
        fill="#4AC3FF"
      />
      <path
        d="M19.0781 28.1875H15.9844C15.7109 28.1875 15.4486 28.2955 15.2552 28.4877C15.0618 28.6799 14.9531 28.9407 14.9531 29.2125C14.9531 29.4843 15.0618 29.7451 15.2552 29.9373C15.4486 30.1295 15.7109 30.2375 15.9844 30.2375H19.0781C19.3516 30.2375 19.6139 30.1295 19.8073 29.9373C20.0007 29.7451 20.1094 29.4843 20.1094 29.2125C20.1094 28.9407 20.0007 28.6799 19.8073 28.4877C19.6139 28.2955 19.3516 28.1875 19.0781 28.1875Z"
        fill="#4AC3FF"
      />
      <path
        d="M43.5755 38.2735C43.382 38.0812 43.1195 37.9731 42.8459 37.9731C42.5722 37.9731 42.3098 38.0812 42.1163 38.2735C41.9228 38.4658 41.8141 38.7267 41.8141 38.9987C41.8141 39.2707 41.9228 39.5315 42.1163 39.7239L44.3025 41.8969C44.496 42.0892 44.7585 42.1972 45.0321 42.1972C45.3058 42.1972 45.5682 42.0892 45.7617 41.8969C45.9552 41.7045 46.064 41.4437 46.064 41.1717C46.064 40.8997 45.9552 40.6388 45.7617 40.4465L43.5755 38.2735Z"
        fill="#4AC3FF"
      />
      <path
        d="M22.4246 20.1515C22.5204 20.2467 22.6341 20.3223 22.7593 20.3738C22.8845 20.4253 23.0187 20.4519 23.1542 20.4519C23.2897 20.4519 23.4238 20.4253 23.549 20.3738C23.6742 20.3223 23.788 20.2467 23.8838 20.1515C23.9796 20.0562 24.0556 19.9432 24.1075 19.8188C24.1593 19.6943 24.186 19.561 24.186 19.4263C24.186 19.2916 24.1593 19.1583 24.1075 19.0338C24.0556 18.9094 23.9796 18.7963 23.8838 18.7011L21.6975 16.5281C21.6017 16.4329 21.488 16.3573 21.3628 16.3058C21.2376 16.2542 21.1034 16.2277 20.9679 16.2277C20.8324 16.2277 20.6982 16.2542 20.5731 16.3058C20.4479 16.3573 20.3341 16.4329 20.2383 16.5281C20.1425 16.6233 20.0665 16.7364 20.0146 16.8608C19.9628 16.9853 19.9361 17.1186 19.9361 17.2533C19.9361 17.388 19.9628 17.5213 20.0146 17.6458C20.0665 17.7702 20.1425 17.8832 20.2383 17.9785L22.4246 20.1515Z"
        fill="#4AC3FF"
      />
      <path
        d="M20.9653 42.1941C21.2384 42.193 21.4998 42.0842 21.6923 41.8918L23.8786 39.7188C24.0721 39.5264 24.1808 39.2656 24.1808 38.9936C24.1808 38.7216 24.0721 38.4607 23.8786 38.2684C23.6851 38.0761 23.4226 37.968 23.149 37.968C22.8753 37.968 22.6129 38.0761 22.4194 38.2684L20.2331 40.4414C20.0898 40.5847 19.9922 40.767 19.9528 40.9652C19.9134 41.1635 19.9338 41.3689 20.0115 41.5557C20.0892 41.7425 20.2207 41.9022 20.3895 42.0149C20.5583 42.1276 20.7568 42.1882 20.9601 42.189L20.9653 42.1941Z"
        fill="#4AC3FF"
      />
      <path
        d="M44.3025 16.5281L42.1163 18.7011C42.0205 18.7963 41.9445 18.9094 41.8926 19.0338C41.8407 19.1583 41.8141 19.2916 41.8141 19.4263C41.8141 19.561 41.8407 19.6943 41.8926 19.8188C41.9445 19.9432 42.0205 20.0562 42.1163 20.1515C42.2121 20.2467 42.3258 20.3223 42.451 20.3738C42.5762 20.4253 42.7104 20.4519 42.8459 20.4519C42.9814 20.4519 43.1156 20.4253 43.2407 20.3738C43.3659 20.3223 43.4797 20.2467 43.5755 20.1515L45.7617 17.9785C45.8576 17.8832 45.9336 17.7702 45.9854 17.6458C46.0373 17.5213 46.064 17.388 46.064 17.2533C46.064 17.1186 46.0373 16.9853 45.9854 16.8608C45.9336 16.7364 45.8576 16.6233 45.7617 16.5281C45.6659 16.4329 45.5522 16.3573 45.427 16.3058C45.3018 16.2542 45.1676 16.2277 45.0321 16.2277C44.8966 16.2277 44.7625 16.2542 44.6373 16.3058C44.5121 16.3573 44.3983 16.4329 44.3025 16.5281Z"
        fill="#4AC3FF"
      />
    </SvgIcon>
  )
}
