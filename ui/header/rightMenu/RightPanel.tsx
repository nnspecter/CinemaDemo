import Link from 'next/link';
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import styles from "./RightPanel.module.scss"

const RightPanel = () => {
  return (
    <div className={styles.RightPanel}>
        <Link href="/cart">
            <IoCartOutline className={styles.CartImg}/>
        </Link>
        <Link href="/authentication">
            <CgProfile className={styles.ProfileImg}/>
        </Link>
    </div>
  )
}

export default RightPanel