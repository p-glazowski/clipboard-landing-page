import Article from "./Components/ArticleComponent/Article";
import ArticleImage from "./Components/ArticleComponent/ArticleImage";
import ArticleInfo from "./Components/ArticleComponent/ArticleInfo";
import ArticleTitle from "./Components/ArticleComponent/ArticleTitle";
import Button from "./Components/Button";
import Footer from "./Components/Footer";
import Logo from "./Components/LogosComponent/Logo";
import LogoContainer from "./Components/LogosComponent/LogosContainer";
import logo from "/logo.svg";
import google from "/logo-google.png";
import ibm from "/logo-ibm.png";
import microsoft from "/logo-microsoft.png";
import hp from "/logo-hp.png";
import vector from "/logo-vector.png";
import PerksContainer from "./Components/PerksComponent/PerksContainer";
import PerksTitle from "./Components/PerksComponent/PerksTitle";
import PerksInfo from "./Components/PerksComponent/PerksInfo";
import SinglePerk from "./Components/PerksComponent/SinglePerk/SinglePerk";
import SinglePerkTitle from "./Components/PerksComponent/SinglePerk/SinglePerkTitle";
import SinglePerkImage from "./Components/PerksComponent/SinglePerk/SinglePerkImage";
import SinglePerkInfo from "./Components/PerksComponent/SinglePerk/SinglePerkInfo";
import blacklist from "/icon-blacklist.svg";
import text from "/icon-text.svg";
import preview from "/icon-preview.svg";
import device from "/image-devices.png";
import computer from "/image-computer.png";

export default function App() {
  return (
    <div>
      <main className="px-5">
        <Article>
          <ArticleImage src={logo} />
          <div className="flex flex-col gap-5">
            <ArticleTitle>A history of everything you copy</ArticleTitle>
            <ArticleInfo>
              Clipboard allows you to track and organize everything you copy.
              Instatly access your clipboard on all your devices.
            </ArticleInfo>
          </div>
          <div className="flex w-full flex-col gap-5">
            <Button>Download for iOS</Button>
            <Button bgColor="blue">Download for Mac</Button>
          </div>
        </Article>

        <section className="flex flex-col gap-15 py-20">
          <div className="flex flex-col gap-5 text-center">
            <PerksTitle>Keep track of your snippets</PerksTitle>
            <PerksInfo>
              Clipboard instatntly stores any item you copy in the cloud,
              meaning you can access your snippets immediatly on all your
              devices. Our Mac and iOS apps will help you organize everything.
            </PerksInfo>
          </div>

          <SinglePerkImage src={computer} />

          <div className="flex flex-col gap-15">
            <SinglePerk>
              <SinglePerkTitle>Quick Search</SinglePerkTitle>
              <SinglePerkInfo>
                Easily search your snippets by content, category, web adress,
                application and more.
              </SinglePerkInfo>
            </SinglePerk>

            <SinglePerk>
              <SinglePerkTitle>iCloud Sync</SinglePerkTitle>
              <SinglePerkInfo>
                Instantly saves and synces snippets across all your devices.
              </SinglePerkInfo>
            </SinglePerk>

            <SinglePerk>
              <SinglePerkTitle>Complete History</SinglePerkTitle>
              <SinglePerkInfo>
                Retrive any snippets from the first moment you started using the
                app.
              </SinglePerkInfo>
            </SinglePerk>
          </div>
        </section>

        <section className="flex flex-col gap-10 py-15 text-center">
          <PerksTitle>Access Clipboard Anywhere</PerksTitle>
          <PerksInfo>
            Whether you're on the go or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </PerksInfo>
          <SinglePerkImage src={device} />
        </section>

        <PerksContainer>
          <div className="flex flex-col gap-5 text-center">
            <PerksTitle>Supercharge your workflow</PerksTitle>
            <PerksInfo>
              We've got the tools to boost your productivity.
            </PerksInfo>
          </div>
          <div className="flex flex-col gap-12">
            <SinglePerk>
              <SinglePerkImage src={blacklist} />
              <SinglePerkTitle>Create blacklists</SinglePerkTitle>
              <SinglePerkInfo>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </SinglePerkInfo>
            </SinglePerk>

            <SinglePerk>
              <SinglePerkImage src={text} />
              <SinglePerkTitle>Plain text snippets</SinglePerkTitle>
              <SinglePerkInfo>
                Remove unwanted formatting from copied text for a consistent
                look.
              </SinglePerkInfo>
            </SinglePerk>

            <SinglePerk>
              <SinglePerkImage src={preview} />
              <SinglePerkTitle>Sneak preview</SinglePerkTitle>
              <SinglePerkInfo>
                Quick preview of all snippets on your Clipboard for easy access.
              </SinglePerkInfo>
            </SinglePerk>
          </div>
        </PerksContainer>

        <LogoContainer>
          <Logo src={google} />
          <Logo src={ibm} />
          <Logo src={microsoft} />
          <Logo src={hp} />
          <Logo src={vector} />
        </LogoContainer>

        <Article>
          <div className="flex flex-col gap-5">
            <ArticleTitle>Clipboard for iOS and Mac OS</ArticleTitle>
            <ArticleInfo>
              Avaible for free on the App store. Download for Mac OS or iOS,
              sync with iCloud and you're ready to start adding to your
              clipboard.
            </ArticleInfo>
          </div>
          <div className="flex w-full flex-col gap-5">
            <Button>Download for iOS</Button>
            <Button bgColor="blue">Download for Mac</Button>
          </div>
        </Article>
      </main>

      <Footer />
    </div>
  );
}
