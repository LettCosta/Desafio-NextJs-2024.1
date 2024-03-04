
import Footer from '@/components/footer'
import NoSearchHeader from '@/components/nosearchheader'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <div>
            <NoSearchHeader/>
            {children}
            <Footer/>
        </div>

    )
}

