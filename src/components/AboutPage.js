import { Container ,Image} from "react-bootstrap"

const AboutPage = () => {

    return(
        <Container>
            <h3 className="my-2">About</h3>
            <hr />
            <Container>
                <h5>Pembuat aplikasi</h5>
                <p>Nama: Clifford D. R. Mantow <br/> Jurusan: Informatika</p>

                <h5>Aplikasi berbasis web ini menampilkan data film yang datanya diambil dari TMDB REST API</h5>
                <p>Aplikasi ini memilik fitur Search untuk mencari nama film dan dapat ditampilkan detailnya <br/>
                Yang berisi data-data singkat tentang film yang dicari, untuk tampilan awal film yang ditampilkan <br/>
                berdasarkan popularitas</p> 

                <h5>Ada 3 End Poin yang digunakan</h5>
                <ul>
                    <li>Yang pertama untuk mengambil movie yang popular - <b>api.themoviedb.org/3/movie/popular</b></li>
                    <li>Yang kedua digunakan untuk mengambil movie berdasarkan pencarian - <b>api.themoviedb.org/3/search/movie?query=</b></li>
                    <li>Yang ketiga digunakan untuk mengambil movie berdasarkan id - <b>api.themoviedb.org/3/movie/</b></li>
                </ul>
                
                
                
            </Container>
        </Container>
    )
}

export default AboutPage