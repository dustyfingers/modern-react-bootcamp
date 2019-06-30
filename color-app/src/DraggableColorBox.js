import React from 'react';
import {SortableElement} from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
    root: {
        height: '25%',
        width: '20%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-3.5px',
        "&:hover svg": {
            color: 'white',
            transform: 'scale(1.25)'
        }
    },
    boxContent: {
        position: 'absolute',
        color: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        left: '0px',
        bottom: '0px',
        padding: '10px',
        letterPpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    deleteIcon: {
        transition: 'all 0.3s ease-in-out'
    }
};

const DraggableColorBox = SortableElement(props => {
    const { classes, handleClick, name, color } = props;
    return (
        <div
            style={{ backgroundColor: color }}
            className={classes.root}
        >
            <div className={classes.boxContent} >
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
            </div>
        </div>
    );
});

export default withStyles(styles)(DraggableColorBox);