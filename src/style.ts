import type { HandleOptions } from '@/types'

export function getStyle(handleId: HandleOptions['handleId'], handleBarId: HandleOptions['handleBarId']) {
  return `
#${handleId} {
  position: fixed;
  left: 0;
  top: 0;
  font-size: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
}

#${handleBarId} {
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

#${handleBarId}::after {
  display: inline-block;
  width: 1em;
  height: 1em;
  vertical-align: -0.125em;
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath fill='%23000' fill-rule='evenodd' d='M19 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8m22-32a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-4 18a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 14a4 4 0 1 0 0-8a4 4 0 0 0 0 8' clip-rule='evenodd'/%3E%3C/svg%3E");
}

#${handleBarId}:hover {
  background-color:  #d1d5db;
}

#${handleBarId}:active {
  background-color:  #9ca3af;
}
`
}
