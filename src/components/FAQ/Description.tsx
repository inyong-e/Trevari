import * as React from 'react';

interface Props{
  categorys:string[]
}

const Description:React.SFC<Props> = ({categorys}) => (
  <div style={{textAlign:'center', margin:'0 25%'}}>
    <h2 style ={{paddingTop:'40px'}}>FAQ</h2>
    <br/><br/>
    <div> 
      더 궁금하신 사항은 트레바리 고객센터(<a>contact@trevari.co.kr</a>)로 문의주세요 :)<br/>
      성함/휴대전화번호/클럽명을 함께 알려주시면 더 빠르게 확인 가능합니다!
    </div>
    <br/><br/>
    <div style={{display:'flex'}}>
        {categorys.map(category=>(
          <button style={{border:'1px solid #ff8906', margin:'5px',padding:'5px', flex:1, borderRadius:'0.4rem',color:'#ff8906'}}>
            {category}
          </button>
        ))}
    </div>
</div>
)

export default Description;