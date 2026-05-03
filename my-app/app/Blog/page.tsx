import FooterDetails from "@/component/atom/Footer";
import Header from "@/component/atom/Header";

export default function Blog() {
    return (
        <>
        <Header/>
        <div className="m-10 h-screen">
            <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
            <br></br>
            <h5>
                We are India’s fastest-growing innovator in flexible conveyor technology, setting new benchmarks in material handling efficiency. By focusing on agile, high-performance systems, we have become the trusted partner for industries demanding maximum productivity and zero-bottleneck workflows.
            </h5>
            <br></br>
            <p>
                100% Efficiency Commitment: Our systems are designed for high-throughput and low-maintenance, reducing downtime and optimizing operational costs.
            </p>
            <br></br>
            <p>
                Rapid Deployment: We recognize the need for speed; our systems are designed for quick installation, allowing you to scale up immediately.
            </p>
            <br></br>
            <p>
                Customized Engineering: We understand that Indian factory environments have unique constraints. We tailor every project for space optimization, varying loads, and power efficiency.
            </p>
            <br></br>
            <p>
                Advanced Technology: We incorporate intelligent controls, 220V gear motors, and smart sensors for automation-grade, seamless material movement.
            </p>
        </div>
        <FooterDetails />
        </>
        
    );
}