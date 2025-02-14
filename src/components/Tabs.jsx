export default function Tabs({children, Button, ButtonsContainer = 'menu'}) {
    return <>
    <ButtonsContainer>{Button}</ButtonsContainer>
            {children}
        </>
}