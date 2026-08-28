'use client';

import { MutableRefObject, useEffect, useRef } from 'react';
import { ReadonlyURLSearchParams, usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

const META_PIXEL_ID = '2843861969321647';
const YANDEX_METRIKA_ID = 111709583;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: Window['fbq'];
    ym?: (counterId: number, method: string, ...args: unknown[]) => void;
  }
}

export default function Analytics() {
  const pathname: string = usePathname();
  const searchParams: ReadonlyURLSearchParams = useSearchParams();

  const isInitialPageView: MutableRefObject<boolean> = useRef(true);

  /**
   * Первый PageView отправляется после загрузки скриптов.
   * Последующие PageView отправляются через этот effect
   * при изменении pathname/searchParams.
   */
  useEffect(() => {
    if (isInitialPageView.current) {
      isInitialPageView.current = false;
      return;
    }

    const url: string = window.location.href;

    // Meta Pixel
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }

    // Yandex.Metrika
    if (typeof window.ym === 'function') {
      window.ym(YANDEX_METRIKA_ID, 'hit', url);
    }
  }, [pathname, searchParams]);

  const handleMetaLoad = (): void => {
    if (typeof window.fbq === 'function') {
      window.fbq('init', META_PIXEL_ID);
      window.fbq('track', 'PageView');
    }
  };

  const handleYandexLoad = (): void => {
    if (typeof window.ym === 'function') {
      window.ym(YANDEX_METRIKA_ID, 'hit', window.location.href);
    }
  };

  return (
    <>
      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive" onLoad={handleMetaLoad}>
        {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>

      {/* Yandex.Metrika */}
      <Script id="yandex-metrika" strategy="afterInteractive" onLoad={handleYandexLoad}>
        {`
                    (function(m,e,t,r,i,k,a){
                        m[i]=m[i]||function(){
                            (m[i].a=m[i].a||[]).push(arguments)
                        };
                        m[i].l=1*new Date();

                        for (var j = 0; j < document.scripts.length; j++) {
                            if (document.scripts[j].src === r) {
                                return;
                            }
                        }

                        k=e.createElement(t);
                        a=e.getElementsByTagName(t)[0];
                        k.async=1;
                        k.src=r;
                        a.parentNode.insertBefore(k,a);
                    })(window, document, 'script',
                        'https://mc.yandex.ru/metrika/tag.js?id=${YANDEX_METRIKA_ID}',
                        'ym'
                    );

                    ym(${YANDEX_METRIKA_ID}, 'init', {
                        ssr: true,
                        webvisor: true,
                        clickmap: true,
                        ecommerce: 'dataLayer',
                        referrer: document.referrer,
                        url: location.href,
                        accurateTrackBounce: true,
                        trackLinks: true
                    });
                `}
      </Script>

      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YANDEX_METRIKA_ID}`}
            style={{
              position: 'absolute',
              left: '-9999px',
            }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}
