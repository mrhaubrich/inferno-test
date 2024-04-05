class CounterButton extends Inferno.Component {
    constructor(props) {
        super(props);
        console.table(props);
        this.onTap = this.onTap.bind(this);
    }

    render(props) {
        console.table(props);
        return (
            <button onClick={this.onTap} style={{ padding: '10px', margin: '10px' }} />
        );
    }
}

Inferno.render(<CounterButton  />, document.getElementById('app'));
