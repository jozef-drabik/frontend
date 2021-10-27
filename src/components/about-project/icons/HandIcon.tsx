import React from 'react'
import { SvgIcon, SvgIconProps } from '@mui/material'

import theme from 'common/theme'

export default function HandIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 50 50">
      <path
        d="M 30.6875 0.09375 C 30.496094 0.09375 30.316406 0.148438 30.15625 0.25 C 29.160156 0.882813 25.015625 2.324219 21.34375 3.59375 C 15.789063 5.515625 13.28125 6.421875 12.5625 7.03125 C 11.320313 8.082031 5.5 16.203125 5.5 18.8125 C 5.5 19.636719 7.378906 25.347656 9.53125 29.78125 C 10.46875 26.675781 13.246094 24.289063 15.8125 22.6875 C 15.660156 21.949219 15.453125 21.34375 15.25 20.875 C 17.246094 19.996094 18.664063 18.230469 19.40625 17.125 C 20.910156 17.925781 22.847656 18.015625 24.4375 17.90625 C 23.089844 19.539063 21.605469 21.546875 21.0625 22.28125 C 20.382813 22.550781 18.648438 23.292969 16.8125 24.4375 C 13.964844 26.21875 10.875 28.976563 11.1875 32.5 C 11.207031 32.703125 11.292969 32.894531 11.34375 33.09375 C 11.378906 33.230469 11.390625 33.363281 11.4375 33.5 C 11.496094 33.660156 11.582031 33.816406 11.65625 33.96875 C 11.71875 34.097656 11.769531 34.25 11.84375 34.375 C 11.933594 34.523438 12.019531 34.636719 12.125 34.78125 C 12.210938 34.894531 12.28125 35.015625 12.375 35.125 C 12.492188 35.261719 12.648438 35.402344 12.78125 35.53125 C 12.882813 35.628906 12.984375 35.71875 13.09375 35.8125 C 13.238281 35.933594 13.375 36.046875 13.53125 36.15625 C 13.644531 36.234375 13.753906 36.335938 13.875 36.40625 C 14.046875 36.507813 14.226563 36.570313 14.40625 36.65625 C 14.523438 36.710938 14.660156 36.765625 14.78125 36.8125 C 14.984375 36.890625 15.191406 36.945313 15.40625 37 C 15.511719 37.027344 15.609375 37.070313 15.71875 37.09375 C 16.042969 37.152344 16.355469 37.1875 16.6875 37.1875 C 19.789063 37.1875 22.625 34.753906 24.6875 32.96875 C 25.230469 32.496094 25.714844 32.082031 26.125 31.78125 C 26.242188 31.691406 26.367188 31.621094 26.53125 31.53125 C 26.609375 31.488281 26.722656 31.449219 26.8125 31.40625 C 26.90625 31.359375 26.988281 31.296875 27.09375 31.25 C 27.230469 31.191406 27.378906 31.125 27.53125 31.0625 C 27.601563 31.035156 27.675781 31.027344 27.75 31 C 28.019531 30.894531 28.296875 30.769531 28.59375 30.65625 C 31.035156 29.726563 34.378906 28.457031 37.34375 25.28125 C 39.40625 23.070313 40.496094 19.863281 41.5625 16.75 C 42.707031 13.40625 43.804688 10.222656 45.875 8.8125 C 46.292969 8.527344 46.421875 7.980469 46.1875 7.53125 C 43.5 2.378906 33.882813 0.09375 30.6875 0.09375 Z M 28.1875 32.96875 C 27.796875 33.128906 27.476563 33.273438 27.34375 33.375 L 27.3125 33.375 L 27.3125 33.40625 C 26.972656 33.65625 26.535156 34.003906 26 34.46875 C 23.828125 36.347656 20.53125 39.1875 16.6875 39.1875 C 13.308594 39.1875 10.210938 36.726563 9.40625 33.625 C 8.5 35.222656 8 37.066406 8 39 C 8 45.066406 12.933594 50 19 50 C 25.066406 50 30 45.066406 30 39 C 30 36.804688 29.34375 34.730469 28.1875 32.96875 Z"
        fill={theme.palette.primary.main}
      />
    </SvgIcon>
  )
}
