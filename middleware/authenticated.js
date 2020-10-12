export default function ({store, redirect}) {
    // If the user is not logged in {}
    if (!store.state.isLoggedIn) {
        return redirect('/login')
    }
}