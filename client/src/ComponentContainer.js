import LandingPage from './components/Landing';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import CreateTrip from './components/CreateTrip';



export default function ComponentChange() {
    const [currentPage, setCurrentPage] = useState('LandingPage');

    const renderPage = () => {
        if (currentPage === 'LandingPage') {
            return <LandingPage />;
        }
        if (currentPage === 'LoginForm') {
            return <LoginForm />;
        }
        if (currentPage === 'SignUpForm') {
            return <SignUpForm />;
        }
        if (currentPage === 'CreateTrip') {
            return <CreateTrip />
        }
    }
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <LandingPage currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )


}