// import React from 'react'
// import {ResponsiveLine} from "@nivo/line";
// import { data } from '@/constants';
// // import { useTheme } from '@mui/material';
// // import {tokens} from '../theme'
// const DashboardGraph = () => {
// //   const theme = useTheme();
//   return (
//     <ResponsiveLine
//         data={data}
//         margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//         xScale={{ type: 'point' }}
//         yScale={{
//             type: 'linear',
//             min: 'auto',
//             max: 'auto',
//             stacked: true,
//             reverse: false
//         }}
//         yFormat=" >-.2f"
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//             tickSize: 0,
//             tickPadding: 0,
//             tickRotation: 0,
//             legend: 'transportation',
//             legendOffset: 36,
//             legendPosition: 'middle',
//             truncateTickAt: 0
//         }}
//         axisLeft={{
//             tickSize: 0,
//             tickPadding: 9,
//             tickRotation: 0,
//             legend: 'count',
//             legendOffset: -40,
//             legendPosition: 'middle',
//             truncateTickAt: 0
//         }}
//         enableGridX={false}
//         lineWidth={1}
//         enablePoints={false}
//         pointSize={10}
//         pointColor={{ theme: 'background' }}
//         pointBorderColor={{ from: 'color', modifiers: [] }}
//         enablePointLabel={true}
//         pointLabelYOffset={-12}
//         enableArea={true}
//         areaBaselineValue={40}
//         areaOpacity={0.05}
//         enableTouchCrosshair={true}
//         useMesh={true}
//         legends={[
//             {
//                 anchor: 'bottom-right',
//                 direction: 'column',
//                 justify: false,
//                 translateX: 100,
//                 translateY: 0,
//                 itemsSpacing: 0,
//                 itemDirection: 'left-to-right',
//                 itemWidth: 85,
//                 itemHeight: 20,
//                 itemOpacity: 0.75,
//                 symbolSize: 12,
//                 symbolShape: 'circle',
//                 symbolBorderColor: 'rgba(0, 0, 0, .5)',
//                 effects: [
//                     {
//                         on: 'hover',
//                         style: {
//                             itemBackground: 'rgba(0, 0, 0, .03)',
//                             itemOpacity: 1
//                         }
//                     }
//                 ]
//             }
//         ]}
//     />
//   )
// }

// export default DashboardGraph