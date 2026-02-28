import react_app_001 from "@/assets/react-app-001.jpeg";
import react_app_002 from "@/assets/react-app-002.jpeg";
import react_app_003 from "@/assets/react-app-003.jpeg";
import ProductContainer from '@/components/ProductContainer';

const ClipwordsReact = () => {

  return (
    <>
      {/* intro */}
      <ProductContainer 
        image_left={true} 
        image={react_app_001} 
        head={"react.intro.head"}
        body={"react.intro.body"}
        foot={"react.intro.foot"}
      />
      {/* stack */}
      <ProductContainer 
        image_left={false} 
        image={react_app_002} 
        head={"react.stack.head"}
        body={"react.stack.body"}
        foot={"react.stack.foot"}
      />
      {/* case */}
      <ProductContainer 
        image_left={true} 
        image={react_app_003} 
        head={"react.case.head"}
        body={"react.case.body"}
        foot={"react.case.foot"}
      />
    </>
  )
}

export default ClipwordsReact