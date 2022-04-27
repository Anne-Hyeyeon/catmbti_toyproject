import Button from 'react-bootstrap/Button'
import React from "react";
const { Kakao } = window

  const KakaoShareButton = ({ data }) => {
  const url = "https://catmbti7186.netlify.app/"
  const resultUrl = window.location.href
  console.log('URL', url, resultUrl)
  React.useEffect(()=> {
    Kakao.cleanup()
    Kakao.init("17695de032cdd95d9e58fd039c5e0880")
    },[])
    const shareKakao = () =>{
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '예비집사 판별기 결과',
        description: `예비 집사님이 고양이를 키우다면, 가장 잘 맞는 고양이는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webURL : resultUrl,
          androidExecutionParams: 'test',
        },
      },
      itemContent: {
        profileText: 'Kakao',
        profileImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageUrl: 'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        titleImageText: 'Cheese cake',
        titleImageCategory: 'Cake',
        items: [
        ],
        sum: '총 결제금액',
        sumOp: '15000원',
      },
      buttons: [
        {
          title: '나도 테스트 하러가기',
          link: {
            mobileWebUrl: url,
            webURl: url
          },
        },
      ]
    });
}
  return(
    <Button onClick={shareKakao} style={{ fontFamily :'EliceDigitalBaeum-Bd', marginTop :'20px', marginLeft : '20px' }}>카카오톡 공유하기</Button>
  )
}

export default KakaoShareButton