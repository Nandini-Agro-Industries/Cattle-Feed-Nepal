import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Nandani Agro Industries Pvt. Ltd.",
    description: "Terms of Service for Nandani Agro Industries Pvt. Ltd. Read our terms and conditions for using our website and services.",
};

export default function TermsOfServicePage() {
    return (
        <div className="bg-background min-h-screen pb-20 pt-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
                    <p>
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
                        <p>
                            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (&quot;you&quot;) and Nandani Agro Industries Pvt. Ltd. (&quot;we,&quot; &quot;us&quot; or &quot;our&quot;), concerning your access to and use of our website.
                            By accessing the site, you confirm that you have read, understood, and agreed to be bound by all of these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">2. Intellectual Property Rights</h2>
                        <p>
                            Unless otherwise indicated, the Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers of such material and are protected by copyright, trademark, and other intellectual property or proprietary rights laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Representations</h2>
                        <p>
                            By using the Site, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>All registration information you submit will be true, accurate, current, and complete.</li>
                            <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                            <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                            <li>Your use of the Site will not violate any applicable law or regulation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">4. Products and Services</h2>
                        <p>
                            We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                        <p>
                            In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-foreground mb-4">6. Contact Us</h2>
                        <p>
                            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                        </p>
                        <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                            <p className="font-semibold text-foreground">Nandani Agro Industries Pvt. Ltd.</p>
                            <p>Omsatiya-2, Rupandehi, Nepal</p>
                            <p>Email: cattlefeednepal@gmail.com</p>
                            <p>Phone: +977-9801412266</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
