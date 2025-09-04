'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
export default function Error() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} >
              <section className="error-section centred">
                <div className="auto-container">
                  <div className="content-box">
                    <div className="title-box">
                      <div className="error-image"><img src="assets/images/icons/error-1.png" alt="" /></div>
                      <span className="text-one">4</span>
                      <span className="text-two">4</span>
                      <h2>Not Found</h2>
                    </div>
                    <h1>Sorry, Something Went Wrong</h1>
                    <p>Oops! The page you are looking for does not exist. Please return to the site’s homepage.</p>
                    <div className="btn-box">
                      <Link href="/" className="theme-btn btn-two"><span>Back To Home</span></Link>
                    </div>
                  </div>
                </div>
              </section>

            </Layout>
        </>
    )
}
