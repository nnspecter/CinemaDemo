import React from 'react'
import styles from "./Preview.module.scss"
import Image from 'next/image'

const Preview = () => {
  return (
    <div className={styles.preview}>
    
        <div className={styles.prewiewImage}>
            <Image
            src="/images/preview/previewGradient.png"
            alt='Back'
            fill
            className={styles.img}
            />
        </div>
        <div className={styles.onImageBlock}>
            <div className={styles.text}>
                <p>2019</p>
                <h1>Интерстеллар возрождение</h1>
                <p>
                    Сюжет рассказывает о бывшем пилоте НАСА Купере,
                    который вместе с группой исследователей отправляется
                    через червоточину в космос, чтобы найти новый дом
                    для человечества, стоящего на грани вымирания
                    из-за экологической катастрофы на Земле.
                </p>
            </div>
            <img src="images/preview/interstellarLogo.jpg" alt="KAPTINKA"></img>
        </div>
    </div>
  )
}

export default Preview