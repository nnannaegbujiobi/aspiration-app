export const GRID_STYLES = {
    wrapper: {
        display: 'grid',
        gridGap: '10px',
        gridTemplateAreas: '"input submit" "error ."',
        borderBottom: '1px solid grey',
        padding: '24px'
    },
    input: {
        width: '100%',
        gridArea: 'input'
    },
    submit: { gridArea: 'submit' },
    error: {gridArea: 'error', textAlign: 'left'}
}

