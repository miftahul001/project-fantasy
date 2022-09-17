const el=a=>{const b=document.createElement(a.a);a.b && a.b.appendChild(b);a.c &&(b.textContent=a.c);a.d && Object.keys(a.d).forEach(d=>{b.setAttribute(d, a.d[d])});a.e && Object.keys(a.e).forEach(e=>{b.addEventListener(e, a.e[e])});return b}
const qs=(a,b)=>(b || document).querySelector(a)
const qa=(a,b)=>(b || document).querySelectorAll(a)
const ge=(a,b)=>(b || document).getElementById(a);
const imgLst={
home:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACy0lEQVRYR+2XS2gTURSGO3kZNASiCxeSEqkBBcWFQRHEZTCEzCS4kFZUKFgQFONSsiwKKihoXahbBSWWPEaRgi7EjeIDX8uKLgIt7SaC1Jin3w2ZMhkmYsaBUMnAZU7u4/z/+c+5J4k0MuBHGjD+yJDA2lVAUZQjkiRlqKFqq9XKFAqFOa2ekslkDPs6QwtwBftgPp8vG2vOigISABcAP69z1oBEGoAZMcd6mvVrerBGoxEuFovz/0QgGo1u4LmHE8Xs9kDihtvtPler1c7YTiCRSIy6XK4iwLt14JcA9QN2Sjf3mLmXzE3bpkAqldqP0xxONwun2L+wpyqVSt7n89Xq9fpJpq8ynB3QGm+3LQTI5zEc3QFwXcfhUrPZTKHGInlVmfsJAQXpd0HsAfv8ZumxUgNmxfYRABmgEGMWe1MHbAFbIfcrTqdTxd5qJNEXAbNiA1AlygmiHcf5TaPEQgnGJOtPUSeHfcBSCsyKDcmvlEqlTDAYvEx0aTOJtTmITpfL5YuBQOAWc8d1e4sQO5rNZn/oz3f1AWOxsbHKmOJgnsjuYx/6E7hu7SH7T5COs8yJntHGgdwnXjL94pu2d5WASbEtk7eUw+FY5Lwoth1/Ca5te0dNyJDYy/m7jPWdhWUUPUznfCE+twkQuYjsiU7GNlNGiIOzvDf2Ca5tXyDqJEHUeYsesqWzUEWh7aqqfm0TiMfjAY/H8wozzMZHMJzg0DjgorV23WcLRCr4nMTnc3wW8Bnh8xwFHaceGvoUjLEYz+VyM7Is70S6DxbAeh7BdwifS0R+mpq6Dfj31RQYT0EgwubXdhLoqw+sBQKfxQ3RK0R+nyHzaC/VbFWAInrLXY7owbjG8xAYGxL4PxQgn3vI55te0VipAc5so26+GH2a/iiNxWJ+r9crCITNSPRLgP3v6Xz7aD7iy63rsfKr2M7+NPxrNngFfgMPrZ0wRpkmOQAAAABJRU5ErkJggg==',
navicon:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA9ElEQVRYR2NkGGDAOMD2M4w6YPCEQEBAwDJGRkbf////09pRb4F2eG7cuPEaKP3BLQsMDPxPxwSZs379+qkD5gBgCORu2LBhCooDgFHwAxgF7PQIhX///qUCo2AOugMigQJuyNFCI8e8BTqgYdOmTZ9RHEAjywgaS+sUP+oA4kMAmAsGNhEOeDakZ0mItSCipwOACQNrUbwcKOEzYJURweRKIwWjBdHgCQFgLvAHJkAXYJVMa0e9/fPnT+fmzZu/oTdIQAKcNEpr6MYmA1tE8wZXi2jACyJgXbAVGP1etI4CYDp7D7TDCdgmvDDaIhoNAVAIAABxvXsh6tRgegAAAABJRU5ErkJggg==',
gear:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADmklEQVRYR8WXbUhTURiA3ebUwLAoi6BBEhJmVlgE/YmgEkTmXLmQougLLOlHliRE0K9EoqAvCrSCCBIaqahrucCMgqIwg4wyiIxVEFgTS5vObT1HnMzr/dpN8MBld+e8H895z3vOea8paZabaZb9JxkCsNvtC00m07w4+OGWlpbvRiaTMEBhYWFqWlpaP87S4x2OjY3ltLa2fkgUImGAkpKStcy+W8bRzqamJveMAjidzqpoNDrHarXWuN3usDDucDhKzWaznKPTAJyNAQC6h/d16J5Ed1QJTCkCJpzXoXRoQvExv2U46Kf/PO+VUoOAPsBZqegPhUJXidKBCZmHgUDA2dnZGZSDkAWA/hoGjsQr4EAk2Qj9WSph/sXYT55siW673++3d3V1haS60wCYoSC/mehaaskzgXPNzc3VmgDFxcWbLBZLB4IWLaOJjANQDoBY1ilNaQlOEGqx1jPScH4X57t154AQZCl8/GybAYIvQ0NDuT6fbyhRgDcorJFRitB3iac+OTn5UzgcXsQMXfw/w5MhlWdsmF2x1OPxBFQBOOEyOeHyUFhB+PMRjm3BST3GovwpI5z3pMaI2Cr6nslB0CfODQ/PR6B7ORfEbhlvkzmAgQEF5XiA2zjfp7Qs2DjM2HWNZSNo4Vzujl4pgJidVivgMHqkJORyuTIId4AIqh7xDG9sbGx8YQRgJQDv1Sg5xAZxMFdN5n8AtgAgzgjZRgTSiYAAMBQBPTlQRw6Uq+TAfsZuaa0j43lMpGfKEhQVFc1PSUnJpTObZM9nEkdlDIUZswPhlY4R+uXoPKc/U0bvCX0dkUikl6eHuuFdTEYxVGT0W4TE1pK2EBA1FCD1bW1t30Ti8b4DoVoF56NkfZZSxaQGcB+D2zXCKW43q4bMV/Z+Dnv/j5yc0l1wkHDe0LGWukSIWAPLtksXALfhaiqelwCk6rKuUwiISiAuSsXl6oEyhBp02tUtBsAdAPZqAggBMvqKdBdgYIC+vwwvUfIqLh7GfshUTa9JxM0k4m9dAAiZgLgcg8BwN0VKaV9fn99ms9XSf1xqCJmnHEIOlm+EpBOFx/j9L3SpFbfGX0DxuqonFhVwNQYXU1SeihWVgBUA0C4DcIEQV8X60a1Ad30wGDzm9XoHlaJm5LtgGQCfZQAqANC6CadxJAyABTNREPkw5cLh/wZuuFe6s3JC0AiA+Dix4XBBzBkJFjTyWSb0DQEkOks1+X/MZ4gwnwK5cgAAAABJRU5ErkJggg==',
arrowLeft:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACLklEQVRYR8WWu0/CUBTGLY/EEf4AFZ2cGXQUB3BCXoODMYwMTro5uDm4ueiii4ORKAmPQsImTdxUEmeNYSBOLEBiJKkVv5tQA/R1eqF6E0Jyc/p9v3sevRVm/nkJk/onk8ngN1axWHzm0eIGCIVCsz6fLysIQpwZ9/v9bLPZTNfrddkOCBfAwLwI841hM0CUvV5vIpfLKVQI2wBG5qohIDIox7kjAFbmA9OTQqGwP3WAgXkJaY8YieP0bK2VSqX7qQJQzQGXwekvqOYszrIHnDS3BHDa3BTgL8wNAZi53+8XERA2aziemo/raXqAYj4Q+cT/i52Gw4R08TvDlNyoz40A2DC34zsSC4AvbCzjZfWmKUEikTjF5i63OvFBQGwB4FYDEI/HG6hrgKjDHQaAHQBc6QGIAIhyKxMfxO29jT641gDEYrE5l8vFXqMLRC2uMBxyJZ/PP+qOIcoQQIDkEITMpgDp39OdAnWTAgGhD4BuejyeB2oaWq1WT5IkNgW/y/AuoEBApQOQCE5EhhiHNb2MotHoIk5YsyhHB5kIqzWlZsO0BMMiFAhkoY3ODoui+DR1ACbIINxut4STzhsZ8EJYfg+ohlQIRVGC5XK5Qc0EGYCaCcQd46vowBEAJppKpZZwyppROVCKQ0zFkWMAZhAwZ9fzKgDajgKoEOj8u6ERfZVleb1SqbxTzVmcrR4YF8bLyoe9NMrR7/V6l9VqtWvHfGIAu2Z68RNlYBoAP+ejEjCjN/9RAAAAAElFTkSuQmCC',
signOut:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACY0lEQVRYR+2Xy0sbQRzHs0nAi/iAIh7Eiz15ahWh3jwaKXlBLoLXQqEU9KCm1vejPhBBUfwPesghjxJaevDSQ/0L9OADPRcai4cSEnb9jCQy2Wx2NhhYDw4MZHfm9/195je/nd9E87jcNJf9e54Bnl4EotHogGEYk+TGG3obv82QuqZpY8lkMi3nTygU6uV9VyqV+llPXlWIh8Phd4gcIOCzEwHqI4725DnY/sH2BWPLjM05hXgAiEQigxj9Es4RuUJsX9f1K7MQ741CoXCUzWZz8hj2hvS8RITmnUA8ALCCb4i/xejS7/f3JRKJf04EynNMAB4WsUAkFlUaMkAOgDYMPkC/rzI0j5sBxDgQc0As22nJW3AfQoxGMPreCICS3ix6K7X0qgCYGCACPxoFIHTIpZl0Or1mpakECAQCTbRjtudVvVDyfCL7iUh8qUpqiySqiADJ2YPz88c4L9sSiWkisSFrKSMQDAZf+ny+s0YAlDQm2eKtsp4bAML3BBA74ocrAOTDLfnQ4hoAjuNEYN0tgHmcL7mSA1bHszIHYrFYc7FYvIC445FfgmWBUgIIpwIin8932gHYfap2JdoRgJOVWxWjkt0qe/7ZSS24YVIr/T0Gh06cynNqAKyhNWOnJUdAVMBh+in3gX7uA//rgbAAWMd5XKUh3weGmHzEua+xZyf0Xa/Xe20W4D1Huv47k8nc1ooAczY5aKZUzivOAfHAKsYx3hYQdsY17oR/MWsHbouCIy61jlqVI6qfiMQ0YuJWLHKiqgEwygq/ygMUrdd8Cd3m27KK4un9L1ARN3r8OQJ3oOlDMDZo6ckAAAAASUVORK5CYII=',
signIn:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACQUlEQVRYR+2WsUsbURzHvSSk6BCbVlHExUFooWR1zdIh6DXJkKk6aGupWto/wNU/oLSUVg20KTpFSELE0NXRzcUhODsUiw5WjMTEzw/ywiWeuTuT5ih4cIS8+733+7zv+773flqPy4/mcv6ee4D/SwFd18c8Hs+zXC63jXeqyj/hcNgXDAYPq9XqgImnLmgr8i3l9/uT6XT6yhjjSIF4PH5A56cMtpbNZt8qCMD6fD7fXytD0+9XqVSKFgqFkop1BBCLxY41TXssnZshgHteqVT6myFQLEBsjH56rd9n4N+3DWAG0UoB4D8C8QGYMr/DmUzmj8TfWQFDslUGWzB6wgwEgIckPpFvKDWJj3Y6BSDj2IJgmWTWj3ingd7sJICM9Y1BF1spoTzEMszgg40GAD7mkWjKyskW31tCtARAnvq+/lcQ3QKQLfoViZeal6NrADUFv+CJd0Y1uw0guYeA+K0gug2QJPm8Wwp8J/lrOXPcADBNLiBWS7BPTKidLYj7f+D+V80zt+WBSCTygGeUc/rW+4GbbY/DKmgGaZXcUgE7Mzdex8Z4O8mNAB29C6TSQfa522RXoCgcQOFTFBSFdUwqVVV717Hd5JKIo36Fn2VeKclG1PnQTj3wk0Fm1cyj0egEHrnhDyADTPoFcS9raqzT741SxhEAsyjScZy3IXkikegtl8tntHssvLRLXCSfz5/fCYDi84nX6w2x5lvGNa9VxUe0DZoAXNIm4CkK109UxfK//jhSwM5OcRpzD+C6AtcXJmUwTOTeUAAAAABJRU5ErkJggg==',
phone:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACq0lEQVRYR+2WTWgTQRiGu/mRWDANqKAouXjxIFIrKAjFIEJByC/oQQXBHzwpKKJ4ERWU3sSrUC8qHoL5PeRiFY8VI4pBFOnBkIvoRa246TaJz8hWdmc3u6nuWg8uLLvZmXzvM+98880oQ8t8KcusP/RvA6RSqVWapkVqtdpHv5yydSCbzR5F8HSv19uqKMoCzx2lUumFHxAWAF18yigGwDQAe30HSCaTa4LB4CyjjspiQOwDouY1hMmBdDp9IRAITPYRaYRCodF8Pt/xEsIEkMlknjH67Q4CZ4vF4g0/AT7b2W8QnMOF9bgw5xWE7MA3AIYdgjeazeZYvV7XfAFgBdQJPGYXnCScabfbSa9rguzAdRy4aANQwPrDWP/dq5EvxjEB4MAWGl5JIiriI4jPey0u4lkKkd1K6HQ6eyqVyuO/AoALJxC6JVXC1+FweJsfLlgcoBoOY/ksAOskiCtUwsteu9BvM7K4gPA8K2EciKdeQvQ7DyhMhZjz3ZILHyjVOwuFwnuvIPoeSHK53EZG/ByhtRLEWyAmnCASiUQoGo2uJHG/uoE6nojYnMYRe0iQFbITwKXL5fKMLIBzq/n2iPZN1JRL5NNNpw3M9UjGsjxAoPsEDUhiGiKTVMdrVMe2aGPkkVgsNk3/XYa+Dfqd77eVuwKIQIzqCI/bNhCi+U232z3VarWexOPxe/zeb2e7ONTw/Zx8shoIQATUnbgjT4dBTOU94jLnmqqqG4z7ycAAIrCeEw/kxHRLtMV2XOjh1ogxOZcEIALpq+Mur6YlOiDESw40o8a+SwbQ/yzqxHHer3KbKqYLyDEARC79un4X4GcAvWwfwtmTTkc52r/QfkYWFzH+CMA4ErGVI3QQoQmem2lb4H7He555n6pWq5/s3PEMYMAcsHT7D/ADUwMQMEIYc+UAAAAASUVORK5CYII=',
gamepad:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC3UlEQVRYR+2WO2hTURjHc/MgsVLxFd1Ep6IIDkFQUcTNIHkhQUGdRB10KFZaxFUdDBKqLkVxcigG84IIIjhUBQcHpYIgVB1EqlQk6tCa3MTfd8kNJ7c3SY2RdMiByznne/y///ed19UcPW5aj+M7+gT6FVjeFQiFQgMej8dfLpc9nZyWarWqa5o2l8/nfzbzX1QBgm5yu90jOIdw3tJJYKsPWF+QFcBLZjKZN6q+gUA0Gh1BeQVDbzcC22BUIJOkqmOpVEoXfZ0AwW8S+Nx/CmyFzVHlw0LCIBCLxc7S3bJY6bAd0nW9COOVjN+iX9EtguBdz2azF7RgMOj3er0zZD+ogmOwgIHPlFGhOWzW/S0BcK5VKpVJp9O5Hd+kglFhvkMj+0sMLttsnG4QyLPpIiY2sY4xvmfOIXdXI7PnsNojQgSSpexYaQs4BxTnp4zX1OZ++g3tqkHmiVwuN6pUMQD+S8VvVirwFYEAOljv/ZzZqXbAkLYC2bqQ0IdSqRQoFArfxQC/CQicVo2FwG8ExkWDcnc6nX7RjgA+sp7TdnYEvY/8FVhh+l3MP9M/Zr6NfqfVR5ZgFuVGUVCyg5Ts0RII7MVGlqShqSWPx+Musp8yl7cZplTgCcoDNQO5KEq1asyzB1abjth9Qre+ppOKOW1A9+HzzJST3EUIXG0WHLyPUoFhuSKtRh0ew1EIJBQCebBDLQiMa+FweNDlcs1gZGxEs3VCQHzwT9C/JnCE73iL5ZznkRsybsJIJHKEi2LSuqQABZH/oB/ge9jlN+I81Uqqb0HL9bLJ5D2kqjW5C3KbW2TboMJtnFt22NhPqoaNdhSlPErGZrNr6L8hPwPAA1XPXjrB/Aa+9Y1r41/kpIxx0iZM3aL/Ad6GVT6f7ySB5BxvBXAt4yL9NH2eh+kOr9gvO3Liy7tyCttD6OWuEDJyCb3jK/DdpuySQL0t71+ypa7pv9j1K9CvQM8r8Ad3eEDgrb5oUAAAAABJRU5ErkJggg==',
userCircle:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEcElEQVRYR62XWWxMURjHTacd1O5BbJEYPFgatYYHQkg9zHSbGiT2eOLFUrt3JSkvTXizBVHtdJvRSh8UsSR0sYSnIlGCB7EOrem0ft91p5mZ3nPvHZzk5N57zvf9v/+3nOU6BqTYcnNzMx0Ox4y0tDR3b2/vcJ4OID5Ho9FXfD8PBoM/UoEUZctWUFAwEqPrMbCW5yIUMhRKEcbv9/T0lLtcrksVFRVfrMBNCfj9/sHd3d07MXwAwyOtwOLn0fnE97GMjIwyiPxU6SoJ5Ofnr8Toefr4VAwbyL5lbFN1dfUNIxxDAoR8F4ZLUXD+o3FNnWh089hTU1NTlozXjwDGj2N8v4lhyfNFekgKjyLs5X0K3St1YlIfAnmUSByJx04gUFhYuJnJcybGH2N0dV1dXbuRTFFR0TTmAxDJUmEQjY1EQhzQWh8Bn883l+q9h/JAI2UUH1FQSyio72ZpycvLG0ZU7qpIgNOFncU40ZZAAO9vMbBUAf4LxRkwf2GnJiQSGHlmko5bpGJZHwGMe/kImoTtDMa32TEek6GWzhKFLSodCHpqa2vrtRQg/BDh+SbCPoSrUyRQBGaliVPNOLXAgfezEHpqAZ5NyB6nSCAbAlqeVY1NbpYQOIhAyf8mQDHOcTqdrWa42g5L+IMwlRpQNvKVcgpwzAdgwIJASAi0Q0A2EmWDacpFCIEzAG61wG0XAt8hMMQiBb9Y29MDgcBLO3VA+KcS/ufIqk5NDQbHvkkNRHlPswHcGg6HlzY2NobNZDlBh1Jcd5CZbQMzaicCUZi+JkqTAWwlEn5VJIimpLIS2Wx0XvGcxLfyQItFQHY3txFbBMrxpjgUCr0lUrJSZMXIrniRHoKMlhKK1C2FTN/Ap4u5Etb4Ya/XOyE9Pf0k42sU+C8kBSEmPckCYhyQdfHjeLiC71LxUAHYBpli9vmmJL1yBYlrkoJDTB5NAuzs6uqaXF9f/97IEPfCmXi2jLmJ+vwbDDexW0rh9WscdOOYl5QkHHSMHXRw88kilE/itfD+NN7vsFFEtkVw9BQEticpZGlnAWlo4TE3NgmB5RC4aRvdhiBLczlLs+9aho0/Z4HoMpnHZK2OEyG8I8wukjbs9RPRL7hyS9b2hoTTUAYI0W1CtARmH7jVuFO931uR0vcHWXFj6In3AZ3APAjc491Fr+T0WytErYDtzGPcGYlEZH8oUN6I9FqQvVv2cNkmL3d0dGxpaWmRS+hfN4y72EvkDujXQTbj3IUYoNGtWNZ5sU7iPulYRzpe/w0DrmZucn0F3QW6/nGMy2bW1wz/C1gVe5E4RncSiTCESjo7O8saGhq+2iHi8XhG8Wu2C1m53g+iy3Z+gKo/kaxv9me0iv3hHApj9Wh843kVMnJ/eFBVVfUuHoyFNB75hYzlS7hjJ6wUtdwN8fy6EXnTf8OcnJwhmZmZu1HcB8jweAA5SPj+zLhgyH/j0OR5pko5QU+YnaC2/o4ppNFU8SYAZWVIPlUnnIS6GbmryJzH649WKfsN8NckzqsVfu8AAAAASUVORK5CYII=',
ticket:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADt0lEQVRYR7WXSUxTQRjH7YZoOIASw6XcJDEeSTyXsrQQEaoWl4sGNbjFgyfFeDBxSTxK0KBGE1SM1NAWAhw8KpsoGhYPevNECFigkLC04G9M20wf0/aVVpLmvffNN/P7f8vMexh2ZOmvpqamKCcn5+D6+vpYb29vQO+yBr2Oyfzq6+uPMd5uMBh2b25uznJ1eb3eT3rWzlhAXV3dcYBv+Zkl4FI4HHZ2d3cPpBKRkYAE8ChzaXV1dX9fX990MhHbFpACLph+ylD/XzKggIepfYAyFErARgS8zLoALRzwImAnsBGXy/UI4JUI9Ay29qwKUMERUOX3+0eqq6t39vf3r7IjWhF0GXunz+c7kTUBKrjRaHR0dXUNE/kFQNcB23mejoi4hIhriGiJisCvBJ89Yk7UpqsJU8EBtbGwgetPRNmECGCPgVzE9p2hUa5FXCuwhTc2NmrI2kchIqUABTzIQg7qO8TYee6fCng0Io2IJ9ibtGXAZzlSusGkAtKFJxDRhl2USPv3iyBKEgpQwVHtJHWD1Pgcqz2TI1dEGSsH/i/wPSv7sFbIYrHkKgVkCpdA74nSTT8cwPZDI9LDWMMWAYpDJnau64lcgoxzbw8EAgsFBQWd3LuksQGz2ez0eDxLcQKSwYmikbQ9T5Z2GR4KhcqDweA88A7sbhU8bheo4DhUi9dqtuAEMMgWFG/JYNw5AOAwg175lcqzi0PElw6cORO8hu0i8vz8/Des1yDtjCHgDhkeywC1/Y2zVdMkVUT/AQE3sD9QbKM4UxSem5sb4KuoQw88KsAAZJmHXZptModiO4rHEXiTBe8nETG5srJiz8vL+wNcRC6/A4YZc/CeWFTN/9eEAFqYdFWxl2cRUS5E0CPNHLP3FIvE4DTea8ZPSj5J4bES2Gw2M936DsNRlQjSa+cAmiBTtxi/K/lMEV2ZiFwLZ84IX0RViSKPa0LxUFpaaikuLhYigkxupZmmifgQmXnILw+7nZ6YlERMCRv7eY60v8LnlNRwnznlqtjnC6l6R3sQiedNeVJtbW2hyWSaBGAkyrKenp4pytGEOG+m8FgJUqmU6j+DCLsQ4Xa7TUQuPsVPS/NHEVWpJ/ItJUgmQhxSROyJ+MzQmHfExwjPR6S0f+G+kqNjPlVA8njK7wHhrGi+OAY9sy24rhIA34ujeJPtU0UG/Cv2inQj110CsTusVmsntVZ944+tra1VpPO/oDYIXSVIICJjuK4SRBVHRNwmE5Wk/Rv25u2mPe0mTKer0/X9C+wmbUEcMmtGAAAAAElFTkSuQmCC',
newspaper:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4ElEQVRYR2NkGGDAOMD2M4w6YDQEMEIgMDDwPz0T5sA7AJeP169fT9P0AbOXcdA4AOZjmIPQ+YTSBbHq0dXBQ2DQOwBXmkAPMUIhBZPHSAOEQmDIOIBQOUJ2GiA2BAbcAcM3DRDy2fAtBwj5nFx5ossBci0gpI9oBxDKVjCLRtMAoSBHl4dHQUBAwAtGRkZxoAJbqKLDQPoVMEhBYjQBQMttgAaD7HkBqo67gYwSmthEwNB///51M4aGhrL9+fOn9f///7HQkKC5W4B2vQTatZiFhaWapu0+Ynwy6oABDwEAvXwofIdj76EAAAAASUVORK5CYII=',
paperclip:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD/0lEQVRYR8WXW0gUYRTHXdd1uxBrBV1MDcxLF4goevGlRXC1TV11W6J6iui5zEtF0YtElkVBdCEoIojSjfUCVl7IpSwhEvKhiBACwR4KWaQW022t34mZZVxn1XVXHPiYb76Z75zf/M/5zjdjSFjkw7DI/hNmBbDZbMtHRkYm+vv7AwsBqwtQUVGxc3JyshaHNoPBsPIvB+dBTk8DgUBDe3u7L14w0wDKy8vP4qgOh5HU+Y5zZ3Nzc288IKY4wXk1RhvEMBAfOF3lPADLUloB/SpRhPHfKFTW2traEStECMDpdGZi9DMGTTT30NDQ4fC4l5SUZBiNxudAbI0XRAigrKzsCoarMDyclJSU7Xa7x/TerrS0dC0QPdzbIhCo4mhpaemcrxJagPcA7MJQPfE9M5PBeEJoAYYBSMXxUQDuhwNYrdYlFosln2dW0frHx8d9ZrNZlNgcixIhABLwC4ayaScBuKYFIPbbCEs7YxvVcaS/m5iYWEfedAOUO18ILYAbI/tpPQDkawASgfsobyr1gPMYDpcpK6URiGotBOOlzO+aa06EABwORznGPMrEgxh5In3ivZ2kG5A+jgpGR0e9KSkpDUCcUCHgquFalMgRJaKBCK8DXibvweA4rYJ1/oyquJv+O3EWDAaz29raBqWPKlIvpG5IzWjkXi2gXdFChAOswV4fLVOF4I1f8sbflJLchwqFQPzUgWgCooZc6eae5JIsY8ds4ZhWbqXYYESyOwSBcwvXj6Q8A/bWZDIVUid+CQShu0zoahQlmujXKjmRJRBA7QNY7OkeuvUeo+kYknBoIdK4vqPsEW+ALIoEwXOnaBKOLIDPU6jqogJQ3iwdAz20TWo46GsheoHYO5MSzLMRgnvYm4waQCaQgGnI6dVCMCxgt5VwvCYcdhWCcn6JcdnG5XD7fL5DXq/3TyTnMj7rB4kCIUqInP9XhxaC/iu/32/v7Oz0i8FoIWYFEKPFxcUbkFuUCEGQIxnA3FJyYt4QcwKYCwQwHSRbkSo3daJeSUapEw+4d0QvFHMGUCGIuSypbE1iyv5wEyVukHDHtU7ClugBIJrCIaICkMmU5lTkl5zIUSG4HsS5bGbT7JMTL3jWxrN9AOTFDBAJQsq2nsSaPSZIHplZMUHtc1EroE5mdaxXlmhICT0IFLBKPZF5AKxQl6xqZ94AYkCBkHDkSjgIhdPj8ch3Q+ggGS9ycZr2gzDJXjPliAlAB0KKTj274kP2gABgLq4v0EwAXicHKuMOIAbtdvu65ORk+VreoZcHOP/E6slD/tEFARCj8gvHcQ5nxwBZrTia4Poxf1OVkf6mYg5B+Bu5XC4jySn/GGZK9Fe1ROspI2NxB4jkKNL4P6L3ej+mXWzKAAAAAElFTkSuQmCC',
whatsapp:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFI0lEQVRYR8WXbWxTVRjH13ZdK85hVcQturgAOgQ0pkaIRh3RD+yl3dY6RhTnBzTRhMSgRnxLlCjOF0iMidEEQowzAR3t2rVLExPDggYIYfJhxAFTMFMkEYUBDWPtNv09zbn13u62vTUknOTk3J7zvPyf/3nOc05tZVe52a6y/7L/BcDr9Tpra2vrAH+jzWb7h3Z2bGzs5NDQULrUgCwD8Pl8N5WXl3fhIEC/n+7McZbi9wF6KJVK9QwMDJyzAqYogI6Ojsp0Ov0Skb6MwUorRmFkHLnu8fHxTwYHBy8X0ikIwO/332u32yM4r1VGzjJGVR+BkT+SyaSdscbhcCxR7LQgXyXyADnOt6+vr+94PhB5AbS3twcw0IOBOSgn+d7qdDq39Pb2JgtF1Nzc7KmoqHgdmfV0t7AxMzMT6O/v32OmZwqgtbX1ASIXhQqJAgN+DByzQr8mo9iLEsBt2LjAuAImRnJtzAIQCASqcXgYhfkoDhP1Q0R9vhTnmmxTU9MtsLEPW3XY+nlyctKbSCQu6G3NAtDW1rYdhXUo/I3gfZFI5FdRaGxsrHK5XKsANwobh60Cgs1l2NtPvxad92DhjbwA2PfFLA7THTh6NhqNbhdhTsI1U1NT+/m8h36epKuGlQmrILD7KrLdBHWJrV0YDodPa7oGBnTRH4P6JTiZFkEMvMiwVVPCUCfMfGMVgArgF+Sr6Zth4U0zAHYA/AVVHhZfQegjTQgAcb6bdQ77WW+1CkAF8T7jRvoJdBfMAiBZy1n+URag6Y5QKDSqCQEsBrAWHQPDMHB3KQBI7hUwJ9so9aFOy63sFuBkLU56ZI9BeL3eOIm0EVASgbSJ6enph0nEQ6UAkLhgUsq1gy7FSVj97zICgJTbLcyNsHiX3jgnYJ7b7T7BXKUcJ/KjXsuPUkDg4xQ+avQJnmVAixIHB6Fnea5hlF9A+WNF4QZkMt+lNBiQQlRPX0+QnxoYYPE5Jj6TCDG+yMSwDRADgGhkLY1cC3LflgIA/XPoy/Y+DYAvcwGsYiIhxjnnc83OuVzJJOoBjEgWXwbE84D4QgwRwM38lqonRWoTDo7kbGMV25ipqOTQI+TQXgMAdd+fURQ/huHvzKILBoOLMPC9lGolm8DxuyTph/x+UOnMMG4DhLCaaUS/Gp2vkZ0iB24AwEUDABWFHBM5Ll8B4Kl89GLsdozFWF9aYAtOA6BGB2AXOp3YHsT2Sm3eUAm1PGAxRUSLqQWS+aaNk+GC0g0YfE27//WCzHfjSK7lMmrMndg7glw5813My3HPNAMAMUobVVdoHEFfgQgzS+qS6pLo+LkMByfp27hHPue3bIXkR4RBKudR8mup/gjPug0RDosOPQyFwWIAiq3r6kuZPEwA1qfXMQAgEeeQ5WfkFUQUT8DAzmIOCq0TjDxid9Ad2NuBvXW58rm3YRDnuxGeBO08lak29tDL3E+xWOySFUANDQ1uj8fzDrLykJXav4/quRLqpRQbWm4SSsRrUIiTNJsZV9MfVznxG2ubOII78wFRL+hO5N9G9lblPEYwT2rHLi8AlYBC/3VyViVjzaJl7SJrexnl5vyTbycOqhnlVfwoo0vpTSDzAbQLE5lkNGtZBqDZz/7LkzvbMCCvo7DcDzDyDN+SyfYi25CSOoL8W7x8fi+2ZfrrWGrzWvpBcUoPgV5eMdkGxvmA9ONgOZHWM3oYxYa8H4/Sf+CYxdhr+f9gqRneA7z79sTj8VOWNK+QUNG/ZlfIT14z/wJFe30//uBYhwAAAABJRU5ErkJggg==',
twitter:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADBElEQVRYR+2WS2gTURSGO0kaMF1UahFEEMFCoLhQUFs3QkWyMU9skIJuRBAUoSiUigsfCLYUFBEEheJCcGEkD4kJBJQsfIAQwYqgK1OCWBUhaNXEvPyuJJBMJzN3GqEgDQw33Puf//z3v+eeGaVrhX/KCufvWhXw/zjg9XqdVqv1eK1WG1YUpYdxnvqK5XK525lMptSoNb/fvyWfz8+n0+mymGtxABKvxWKZi0ajWTPFCelJ8FdIbFPHIeR1pVIZs9lsTv6Pst4L//4GrkVAIBB4DqivXC7vjcfjH2REkPwQie/IYMF8ZoO7s9lsruFKiwDIFuv25Rg9kUjklR6xy+XqcTgcWbD9RgLY2E8wt3jW8/9hLBa7qz4CBQcKTNrFAqAiw2R3d/f1UChU0UqAYD/JI0bJm9er1eoMySc0jwC+NxAONgeIM2TuPG5Ema82r4GfYG3ahIBT8Fxtxqtr4CyLl7QIEfKeZPcoqEShUMikUqkfCBhnroVQTwyF6MDNX20FeDweB1fpJaROg11VECSKtAp2s6QDJXb/93g1BdSTz0D4AsBlng2SxLKwBQQs4VQfwVfY+mQZzeBwLM39H2nrgFjgTGdx4IgZYhPYKRw4oyuAY9hEocwB6jVBLAXFgX048EhXgFikG++hW8VwYq0UswSI5DmSi2JtucYiVPNt6Ha7N+LEJCIO/yM3zmH/RS2tmgLoiGlU7xBtWWKDuhB4PtFNB7j/i2YEuAl8gICOvxfgOYr9s+1Utk3g8/mOUQs3CLR04MJ9rA/qxevukGu5i2DR78X9Ndsf3tKyh5LJ5LdlC6gHKgg5wf8p2ZrA9ne4NxIOhz8audfWgWAwuKZUKh2A4DSJtxkRNa0/LRaLo4lEYkEmpiHAwi4Ponw7yvsZB0g6BMGSl4cO6W/e9Rfsdvt0u+8Ho1ugUHhjCBgHuFNGvcAgNo/YmzzXZCxX82oeAUIGESI+HIdJsJVxXb0hfWf8QjJh7zOexzSsJ+p3vKx4gev4nptJZnQEnXItK37VgT8i9SMw81jf/gAAAABJRU5ErkJggg==',
facebook:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABZElEQVRYR2NkGGDAOMD2M4w6gOoh4OvrK8LCwiLx9+9fVmZm5t+MjIyfgfSr1atXf8cW3VRxgKenJzsHB0f2////04AWqmOx6Mv69et5aeIAoOWiQMu3Ag03xZWggQ77umHDBh6aOCAgIGA/0NcO+HITzRwQGBjoA7R4M6GsTEsHLARaHofFAT+Alp4Din+Gyn0HRkEg1aMAGAKXgYbqIBsMtPgTEOts3LjxMaGQAclTlAuADngGNEMSzaKlwBQfQ4zlFDsAmADfABOgMFoI9AGDu3ggHdALdEDJ8HOAn5+fOjC4dZF9BuTPA2KUEg6YADcD8SJkdUxMTK+B6eIgRbkAmOAqgAa0Exu0aOrWAB0QOmAOAIZIFzBdlA+YA/79+5cBLBdmDpgDgBa7AaNgN6UOKAIGZRNaIuTGYuhvoLpfyOLA9oDe2rVr71HkAGyacRREw7QcGA2B0RAYDYHREKBVCAAAzdbqIUiBgV8AAAAASUVORK5CYII=',
marker:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADK0lEQVRYR8WWS2gTQRjHs0mlsUU9aPUUBC0FqUVtVUQFQTCSQtJUjA+kCPamiBR8HMSLeNCDUKQogiJIQRTzavEFosHHQbFUsNKDlqo5FIrY4AOENIm/gaRsh+zO7ErpwrK7M/P9v9/3zTezY3jm+TLm2b/nfwCMcDi8tFQq1U5MTEwODQ3l3QTjCCAWi/ny+XwXjg5y7zAMo1Y4BaLE+wce6UKhcGVwcPC7Low2QGdn5zpE73CvsRMH4hf3qXQ6fV0HQgugo6NjNxHGuet1RMtZ6U2lUj2q8UoAnLfg+DX3IpWY3E8mTgJx2c5OBWBEo9G3ON9YRTxD2zP6/uJIQO7le6E0Lu/1epvj8fgnKwhbAJxHEU5Kxr9pO5BIJB6Y28lUAGcp2lrN7cD1kwVRuFUvWwAKrx+rQ2bLYrEYo8DuV1MLhUINfr9/hL7llX4Afmaz2WVWy1QFMIbQKpOzkWQy2WI3pyTtHBk6L2VhA1l4X81ONQV/EKszGd4C4IgCIIjNEwmgHYBHbgDEfJuX3m0ADtsBUAvt1MKs+mB8CLvHbgA+A7DaNJ/jRNLId9EKgim4hM1pcz+7Y+vAwMCwG4AbiHVLRXiMIrxaTQznAnZY2jN+TE1NrchkMtOOASKRyDafz/dKmk8h1EMmBMRMJnC+Gcf3aFspje9j7HGrjKk2Ig9L8SXG22UBltc4bS/ERsRzLd9beZ+lR9s09dDInvHVNQCRhdB9aFd4Nn3KolVmQIgDIeZ1vROI8i+6meoftbPTBdgHwF0nAIzFd3KPykYLABEvWRgFokklWOln6W1i6b1TjdcFEMUodsCbKkHRT/qfUvm7dMZqA7S1tS0IBAJjZCGgEib6nUT/XDVO9GsDlIvxBAC9dsJE/4bot+g4dwzAKbiupqbmC4YNNg6iFF96TgCEKLVwlscFCwcfy7/r0pwBcDRfwtH8G1OxWHZC+rtIvzjEaF+OaqCiShYu8n7G7EVszblcrsnqp2NF5BZAHLlELcwcQgE4SvTXtEMvD3QFUF4R3UxDH+9+7gS/3P1Oo3e8CuTogsFgvbgovEmnkVfGu86AW4ey3T/3QEAwCtSASgAAAABJRU5ErkJggg==',
envelope:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC50lEQVRYR+2XPWhTURTH+/LVgIKJH5vFQUQXcXFzaB0U09q0icQPnFriUuwgokip4FAUKiJa6WClughqMN9RQdQguDkITopdRKdUjYgY8unvPG7CS6ht2tjXJRcO79377rn///3fc85NtI41btoa43e0CWg9PT1Ol8s1wVEEsE0mHck3TdMe5XK5cW1wcPAmnVGTgOtgKpXKDSGQgcBmOrPYUzOIWCyWg+CcwjKaz+erKNATkUjkgRkEwDwMTkKwagTY/UQ0Gr1oEoEL4FxpJDBnt9t3hkKh0mqSCAQCjmKx+BGMbXUEpIMKY6igM1utNjAwMEkMnKuub4wBGStBIgiJe6tBAPAgAX8bqxVAI4GfgG6AgASlxMMlnuX/RMRCtsl64wpcx6o7gnK5fBxppB7sU8fxhOdJiGRbIQGwC//7APeqdd6ANQWWnnFGBTxUpldOp3OKcclRiYk5zBeLxd6vhASS7wY4gm1X/jNgjIKxn75ec+oIUAeeySB5OgzwNI6dPH/zHOJbaDkk2PlR5s/iu45nDhthjbtq/UOLEpBJXq93LzKFWaBLqTFJmo4tlaakmbVQKFzG77zy+4zkR+Lx+NvqBtjg0gRkssfj2YJcsvNu5fw8n88fS6VSPxZSo6+vz+1wOB7y7YACT5dKpUAikZg3zm+agDhxW9q4La+zo9Nq0Q+8e5FTikmt9ff377LZbHEGdqh5t7LZ7Jl0Ol1sJLssAlVnyWGOZJq+nbj4JRIDOJPJZDS32x1k/Cq2Hisg+QiBe2chlZqOgYWcYd4N+GPA9d8NiogUFQGW/rw679f/Am+JgDj7/f6tgFzjNWCoaGXAQ9T4s8lk8uti4C0TMBxJFwT04ORo0uFw+MtSwNXvK4qBZhdvZl6bQKMCf5DNiQ1XS2UzMrYyBwJD+M9iObkLXvIil4Ppjcx5oUkFs1qtScONZQoRwD+B26v/MqHmd9L2QGKjGeiAf+die8fFlm//N/wL8wJ8GYwNOysAAAAASUVORK5CYII='
};
window[(true+Function("return Date")()())[30]]=()=>{
(()=>{
	const a=el({a:'div', b:document.body, d:{style:'position:fixed;bottom:0;width:100vw;display:flex;padding:8px;gap:8px;justify-content:space-around;background:rgba(255,255,255,.9);border-radius:16px 16px 4px 4px;'}})
	el({a:'img', b:a, d:{src:imgLst.phone,style:'width:40px;height:40px;border-radius:4px;cursor:pointer;'}})
	el({a:'img', b:a, d:{src:imgLst.gamepad,style:'width:40px;height:40px;border-radius:4px;cursor:pointer;'}})
	el({a:'img', b:a, d:{src:imgLst.ticket,style:'width:40px;height:40px;border-radius:4px;cursor:pointer;'}})
	el({a:'img', b:a, d:{src:imgLst.navicon,style:'width:40px;height:40px;border-radius:4px;cursor:pointer;'}, e:{click:a=>{ge('menu1').classList.toggle('show')}}})
})();

(()=>{
	const a=el({a:'div', b:el({a:'div', b:document.body, d:{id:'menu1'}})})
	const b=a=>{
		const b=el({a:'div', b:a[0]})
		el({a:'img', b:b, d:{src:a[1]}})
		el({a:'a', b:b, c:a[2], d:{href:a[3]}})
		//el({a:'div', b:c, c:'>', d:{style:'margin-left: auto;'}})
	}
	a.parentElement.insertBefore(el({a:'div'}),a)
	b([a,imgLst.home,'Home','index.html'])
	b([a,imgLst.ticket,'Ticket','ticket.html'])
	b([a,imgLst.home,'Winner','winner.html'])
	b([a,imgLst.newspaper,'News','news.html'])
	b([a,imgLst.home,'Faq','faq.html'])
	b([a,imgLst.phone,'Support','support.html'])
	
	el({a:'a', b:a.parentElement.children[0], d:{style:'position:absolute;top:48px;left:32px;font-size:32px;cursor:pointer;'}, e:{click:a=>{a.target.parentElement.parentElement.classList.toggle('show')}}}).innerHTML='&times;';
})();
}
