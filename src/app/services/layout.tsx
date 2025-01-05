export default function first({children}: Readonly<{children: React.ReactNode}>): React.ReactElement {
    return <>
        {children}
    </>
}