import React from 'react';

export default class Ball extends React.Component {
    render() {
        const { x, y, onClick } = this.props;
        return (
            <div
                onClick={onClick}
                style={{
                    backgroundColor: '#cacaca',
                    position: 'absolute',
                    top: y,
                    left: x,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                }}
            >
            </div>
        );
    }
}