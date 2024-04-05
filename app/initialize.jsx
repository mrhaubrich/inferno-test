import Banner from './components/banner';
import CounterButton from './components/button';

class App extends Inferno.Component {

    render() {
        return (
            <>
                {/* <Banner /> */}
                <CounterButton onTap={() => {
                    console.log('aaaaaaaaa');
                }} />
            </>
        );
    }

}

Inferno.render(<App />, document.getElementById('app'));
