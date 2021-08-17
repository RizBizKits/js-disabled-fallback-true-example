import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles.module.css'

export const getStaticPaths = async () => {
	return {
		paths: [{ params: { path: ["about"] } }],
		fallback: true
		//fallback: "blocking"
	}
}

export const getStaticProps = async ({ params }) => {

	console.log(params); // never called with js-disabled & fallback true

	const props = { path: params.path };

	return { props, revalidate: 120 }
}

export default function Path({ path }) {
	console.log(path); // just undefined
	return (
		<div>
			Path: {JSON.stringify(path)}
		</div>
	)
}
