import { blue, gray } from 'styles/colors'

export const Star: React.FC<{ active?: boolean }> = ({ active }) => (
  <svg width='21px' height='20px' viewBox='0 0 21 20'>
    <polygon
      fill={active ? blue : gray}
      points='21.0282141 7.63931011 12.9957898 7.63931011 10.5135906 0 8.03145723 7.63931011 -0.001 7.63931011 6.49737845 12.3606899 4.01521218 20 10.5135906 15.2786531 17.0119362 19.9999671 14.5298028 12.3607227'
    />
  </svg>
)
