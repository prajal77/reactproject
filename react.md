#Project Setup
npx create-react-app <Foldername>
for existing directory setup
cd <directorypath>
npx create-react-app

#Project directory
Pages/
admin/
seller/
customer/
home/
layout/
components/
admin/
seller/
cusotmer/
home/
common/
services/
-to api call
config/
-to store static configuration
assets/
css/
js/
images/

# Component

    -to represent the view
    -an UI block
    -2 types of componets
        a. Stateful /Class Based
        b. Stateless/functional

## State Vs Props

    -Component Storage

### State

        -a component storage
        - State is always present inside a component
        - State can be changed/maipulated

### Props

        -are the incoming data to a component
        - readonly data
        - Props can be passed from one componet to another as well

## React Hooks

    a. State Hook
    b. Effect Hook

### React Lifecycle

    -Mouting Stage -> Loading of a component
        constructor()
        -inititalize the props to super(props)
        -intitialize the state this.state ={}
    static getDerivedStateFromProps(props,statue){
        - if there are any props needed to assign to the state
        return null;
    }

        render()
        componentDidMount()
            -if there is any state/props change then update will be called

    -Updating Stage -> Update phase
        render()
        shouldComponentUpdate(nextProps,nextState){
            return true;
        }
        componentDidUpdate()\
            -if there are any state change it will re-render the component
        getSnapshotBeforeUpdate(preProps,prevState){
            return null;
        }

    -Unmounting Stage -> destroying the component from the browser/ render
        componentWillUnMount();
