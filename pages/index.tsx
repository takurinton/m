import { Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';
import { loadImage } from '../utils/loadImage';

const Home = (props: {
  json: {
    alt: string;
    path: string;
  }[]
}) => {

  const json = props.json;
  // ここで json を渡せば画像をいい感じに読み込んでくれるようにもできる
  loadImage();

  return (
    <Flex flexWrap={'wrap'} id={'takurinton'}>
      {
        json.map(i => (
          <Box key={i.alt} margin={'100px 50px'} width={450} height={300} background={'red'}>
          </Box>
        ))
      }
    </Flex>
  )
}

// 一旦使わない、本当はこんな感じでレスポンスが来るイメージ
// export async function getServerSideProps() {
//   return {
//     props: {
//       json: [
//         {
//           alt: 'a', 
//           path: '/a.JPG', 
//         },
//         {
//           alt: 'b', 
//           path: '/b.JPG', 
//         },
//         {
//           alt: 'c', 
//           path: '/c.JPG', 
//         },
//         {
//           alt: 'd', 
//           path: '/d.JPG', 
//         },
//         {
//           alt: 'e', 
//           path: '/e.JPG', 
//         },
//         {
//           alt: 'f', 
//           path: '/f.JPG', 
//         },
//         {
//           alt: 'g', 
//           path: '/g.JPG', 
//         },
//         {
//           alt: 'h', 
//           path: '/h.JPG', 
//         },
//         {
//           alt: 'i', 
//           path: '/i.JPG', 
//         },
//       ],
//     },
//   }
// }
export default Home
