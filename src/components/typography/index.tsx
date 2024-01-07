import { CSSProperties, createElement, ReactNode } from 'react'
import './index.css'

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
type Variant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'subtitle1'
	| 'subtitle2'
	| 'body1'
	| 'body2'
	| 'caption'
type TypeBaseProps = {
	children: ReactNode
	variant: Variant
	component: Tag
	style?: CSSProperties
}

const getVariantClass = (variant: Variant) => {
	const variants = {
		h1: 'typography-c_h1',
		h2: 'typography-c_h2',
		h3: 'typography-c_h3',
		h4: 'typography-c_h4',
		h5: 'typography-c_h5',
		h6: 'typography-c_h6',
		subtitle1: 'typography-c_subtitle1',
		subtitle2: 'typography-c_subtitle2',
		body1: 'typography-c_body1',
		body2: 'typography-c_body2',
		caption: 'typography-c_caption',
	}
	return variants[variant]
}

const Typography = ({ children, variant, component, style }: TypeBaseProps) => {
	const className = `typography-c ${getVariantClass(variant)}`
    
	return <>{createElement(component, { className, style }, children)}</>
}

export default Typography
