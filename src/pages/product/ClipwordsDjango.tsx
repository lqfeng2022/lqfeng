import django_app_host from "@/assets/django-app-host.jpeg";
import django_app_server from "@/assets/django-app-server.jpeg";
import django_app_schema from "@/assets/django-app-schema.jpeg";
import django_app_api from "@/assets/django-app-api.jpeg";
import django_app_api_products from "@/assets/django-app-api-products.jpeg";
import django_app_orm from "@/assets/django-app-orm.jpeg";
import django_app_cookies from "@/assets/django-app-cookies.jpeg";
import django_app_admin from "@/assets/django-app-admin.jpeg";
import django_app_ws from "@/assets/websocket.png";
import voice_agent from "@/assets/voice-agent.webp";
import ProductContainer from '@/components/ProductContainer';

const ClipwordsDjango = () => {
  return (
    <>
      {/* intro */}
      <ProductContainer 
        image_left={true} 
        image={django_app_host} 
        head={"django.intro.head"}
        body={"django.intro.body"}
        foot={"django.intro.foot"}
      />
      {/* linux server */}
      <ProductContainer 
        image_left={false} 
        image={django_app_server} 
        head={"django.host.head"}
        body={"django.host.body"}
        foot={"django.host.foot"}
      />
      {/* schema */}
      <ProductContainer 
        image_left={true} 
        image={django_app_schema} 
        head={"django.schema.head"}
        body={"django.schema.body"}
        foot={"django.schema.foot"}
      />
      {/* restful api */}
      <ProductContainer 
        image_left={false} 
        image={django_app_api} 
        head={"django.api.head"}
        body={"django.api.body"}
        foot={"django.api.foot"}
      />
      {/* products/<pk> */}
      <ProductContainer 
        image_left={true} 
        image={django_app_api_products} 
        head={"django.api-detail.head"}
        body={"django.api-detail.body"}
        foot={"django.api-detail.foot"}
      />
      {/* orm */}
      <ProductContainer 
        image_left={false} 
        image={django_app_orm} 
        head={"django.orm.head"}
        body={"django.orm.body"}
        foot={"django.orm.foot"}
      />
      {/* cookies */}
      <ProductContainer 
        image_left={true} 
        image={django_app_cookies} 
        head={"django.cookies.head"}
        body={"django.cookies.body"}
        foot={"django.cookies.foot"}
      />
      {/* admin */}
      <ProductContainer 
        image_left={false} 
        image={django_app_admin} 
        head={"django.admin.head"}
        body={"django.admin.body"}
        foot={"django.admin.foot"}
      />
      {/* ws */}
      <ProductContainer 
        image_left={true} 
        image={django_app_ws} 
        head={"django.ws.head"}
        body={"django.ws.body"}
        foot={"django.ws.foot"}
      />
      {/* voice agent */}
      <ProductContainer 
        image_left={false} 
        image={voice_agent} 
        head={"django.agent.head"}
        body={"django.agent.body"}
        foot={"django.agent.foot"}
      />
    </>
  )
}

export default ClipwordsDjango