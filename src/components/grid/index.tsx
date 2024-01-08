import {
	CSSProperties,
	Children,
	Fragment,
	ReactElement,
	ReactNode,
	cloneElement,
	createElement,
	isValidElement,
	useMemo,
} from 'react'
import './index.css'

type Props = {
    component?: 'form' | 'div' | 'main' | 'article' | 'section' | 'header' | 'footer' | 'aside' | 'nav'
	children?: ReactNode
	style?: CSSProperties
	container?: boolean
	item?: boolean
	spacing?: number
	xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
}

const Grid = ({
    component = 'div',
	children,
	style,
	container = false,
	item = false,
	spacing = 0,
	xs = 12,
    sm = 12
}: Props) => {
	const containerClass = container ? 'grid-c_container' : ''
	const className = `grid-c ${containerClass} grid-c_xs-${xs} grid-c_sm-${sm}`

	const space = spacing * 8 + 'px'
	const negativeSpace = '-' + space

	const fixedStyle = {
        width: `calc(100% + ${space})`,
		marginTop: negativeSpace,
		marginLeft: negativeSpace,
		...style,
	}

	const childKey = useMemo(
		() =>
			Math.floor(Math.random() * 100) +
			' ' +
			Math.floor(Math.random() * 100) +
			'grid-child',
		[],
	)

    const fixedChildren = useMemo(() => Children.map(children, (child, idx) => {
        if (isValidElement(child)) {
            const childStyle: CSSProperties = child.props.item
                ? { paddingTop: space, paddingLeft: space, ...child.props.style }
                : child.props.style
            return (
                <Fragment key={idx + childKey}>
                    {cloneElement(child as ReactElement, { style: childStyle })}
                </Fragment>
            )
        }
        return child
    }), [children, childKey, space])

	return (
        <>
        {createElement(component, {className, style:fixedStyle}, fixedChildren)}
        </>
	)
}

export default Grid
