import { useEffect, useRef } from "react";
import Wrapper from "./Wrapper";

function ScrollIndicator() {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function indicator() {
      const totalScroll = refContainer?.current?.scrollHeight;
      const totalHeight = totalScroll! - 300;
      const topScroll = refContainer?.current?.scrollTop;
      const scrolledHeight = (topScroll! / totalHeight!) * 100;
      if (indicatorRef && indicatorRef.current) {
        indicatorRef.current.style.width = `${scrolledHeight}%`;
      }
    }
    refContainer.current?.addEventListener("scroll", indicator);
    return () => refContainer.current?.removeEventListener("scroll", indicator);
  }, []);
  return (
    <div
      ref={refContainer}
      className="relative md:w-[75%] px-5 text-black  w-4/5 bg-white rounded-lg lg:w-1/2 h-[300px]  overflow-hidden overflow-y-scroll"
    >
      <div className=" sticky w-[95%] top-1 mx-2 h-2 rounded-lg">
        <div
          ref={indicatorRef}
          className=" h-full rounded-lg w-full bg-green-500"
        ></div>
      </div>

      <p className=" mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        necessitatibus itaque voluptas est qui eius autem voluptates quae?
        Eveniet a possimus, quam nostrum delectus nesciunt commodi quo
        recusandae unde ducimus? Voluptatem quisquam at magnam odit, laudantium
        tempora, modi ipsam aspernatur nihil dicta, ducimus eum aliquam
        exercitationem dignissimos provident! Odit eveniet quam consequatur
        necessitatibus laudantium optio repellat assumenda illo, voluptate
        voluptatem. Quidem et sit blanditiis non similique suscipit in repellat
        aspernatur est laudantium, tenetur soluta debitis quaerat possimus quos
        saepe tempore. Hic a enim sed dolore blanditiis corrupti optio officiis
        iusto. Quod explicabo esse nulla fugit? Expedita veniam ab sunt nam,
        ipsum consequatur repellendus libero delectus quo recusandae maiores
        porro repellat nulla eos voluptatum qui asperiores. Ex alias veniam
        maiores minus. Inventore, adipisci ab esse eveniet nemo neque labore,
        doloribus impedit nisi animi rem cumque commodi! Corrupti cum hic fuga.
        Ratione ea maxime laboriosam voluptatibus culpa, sapiente minima quae
        dolore praesentium? Distinctio earum corrupti ratione quod quos dolor ea
        dicta minima tempora iure. Amet veniam id sunt fugit ipsa, voluptatum,
        cum molestiae animi maxime corrupti, assumenda soluta maiores ut ipsam
        eaque. Libero ab neque beatae itaque voluptates voluptatibus, laboriosam
        autem accusantium officia aut error rerum asperiores delectus
        perferendis soluta nobis quisquam ipsa cupiditate id quasi nemo ipsum
        eveniet at. Reiciendis, eveniet. Iusto, earum qui ipsum eum perferendis
        deleniti voluptas molestiae sapiente vel tempore distinctio natus, ipsa
        porro sequi dignissimos quasi tempora itaque maxime, rerum et at ea
        asperiores corrupti rem. Rem! Unde harum officiis repudiandae. Optio
        quasi tempora quisquam aut cumque ad sunt illo nostrum sequi nesciunt
        provident iure temporibus ipsam aliquam sit laborum repellat,
        consequuntur ut nam? Quo, quidem. Quam. Libero, assumenda? Commodi, amet
        sapiente repellendus temporibus porro quaerat dignissimos quia
        distinctio excepturi explicabo eius libero provident neque vero aperiam
        suscipit aliquid, fugiat dolor culpa unde quis molestias ipsam
        quibusdam. Natus odio voluptatum molestias quod assumenda ipsa cumque?
        Itaque tempora dignissimos odio reiciendis repellendus dolores corporis
        fugit sunt molestiae, necessitatibus illum repudiandae obcaecati maiores
        officiis eum repellat magni earum expedita! Pariatur ea, nobis mollitia,
        quam aliquam beatae quia error quas odit totam fugit odio! Dicta
        possimus, magnam optio tempore vitae ipsa amet omnis et nobis, sunt
        aliquid vero. Fuga, odit. Iure ad, sapiente ratione quis voluptatem
        recusandae aperiam, illo id doloremque necessitatibus et temporibus
        excepturi pariatur perferendis velit in laboriosam labore? Rerum omnis
        facere molestiae voluptatibus possimus. Officiis, voluptatibus
        reprehenderit. Dolorem, porro laboriosam! Eius itaque consequatur enim
        quo, maiores, aut esse aspernatur molestiae consectetur modi, quae
        quisquam voluptates minus quam dignissimos temporibus culpa facere
        deleniti voluptatibus. Aliquid soluta aspernatur cum! Facere ad maiores
        mollitia a. Eum adipisci cupiditate asperiores laborum quasi. Modi,
        assumenda! Magnam, voluptates fugit. Dolorum, fugit vero? Cupiditate
        laudantium facilis corrupti odio consequuntur. Soluta tempore debitis
        nostrum omnis. Fugiat, quis placeat! Veniam dolorem ipsum amet! Iure
        similique sint libero architecto ipsa repellendus dolorem! Accusamus,
        nesciunt. Blanditiis est repudiandae nemo eaque at quas, tenetur omnis
        nulla corrupti eligendi temporibus? Corrupti, necessitatibus similique
        perspiciatis maiores magnam accusantium tempora earum laboriosam iste
        ipsam eum voluptas iusto molestias doloremque perferendis? Autem animi
        amet ipsum. Culpa debitis doloremque ducimus distinctio excepturi modi
        nobis. Rerum cum veniam non commodi inventore, obcaecati itaque aut
        omnis possimus numquam porro magnam quis, temporibus quae aliquam
        maiores tempora ea. Modi fuga accusantium sit aspernatur tempore ratione
        quod ex. Commodi earum quibusdam doloribus omnis, fuga quos at deserunt
        voluptatem nisi enim labore dicta eum corporis accusantium qui assumenda
        debitis aliquid consequatur velit nobis tempora magni architecto minus!
        Porro, minus! Nesciunt praesentium nobis eligendi eaque expedita! Nihil
        facere nulla ut ullam officiis explicabo aperiam nam, deleniti, omnis
        iusto cum quas eius, dolorum debitis similique. Laborum ut voluptates
        nesciunt omnis doloribus! Ex autem expedita reprehenderit illum vel
        repellat, laborum aliquid! Unde nihil reiciendis veniam. Corporis amet,
        repellat culpa exercitationem vero consequatur ducimus rem sed odit,
        totam saepe eligendi. Dolores, porro autem. Et deleniti quo vitae, harum
        expedita, reiciendis iure aperiam deserunt repellendus neque ad sed. Sit
        id neque eius inventore cupiditate aliquam, officia praesentium ea
        molestias natus ipsum accusamus provident iusto. Maiores, explicabo
        inventore vero ad sapiente earum temporibus facere laborum non nihil
        architecto aperiam molestias ipsam asperiores, facilis dignissimos
        necessitatibus a expedita quam autem voluptas cumque error? Explicabo,
        non hic. Dolorem aliquam tempora velit soluta ratione odit, ullam maxime
        quas, ipsa hic magni molestias culpa iusto modi ab eius ea consequuntur
        sed laboriosam officiis qui commodi praesentium! Incidunt, est
        assumenda. Nulla veniam placeat rem quod, quaerat voluptatibus sit
        consectetur magni temporibus eveniet! Rem consequatur nam sit unde illum
        aut iste quae, ab mollitia enim tenetur atque dignissimos aspernatur
        sapiente porro! Fuga aperiam nam cumque cum maiores possimus vero, eos
        quisquam deserunt id amet assumenda placeat odio, quaerat ipsum porro
        quos voluptatem veritatis odit sit autem laudantium? Magni a
        reprehenderit minima? Dolorum exercitationem dicta porro aliquam unde
        eaque sed vel! Inventore perferendis voluptate illum commodi molestiae
        modi impedit ipsa unde excepturi nemo, corrupti in. Numquam eum,
        possimus corporis sapiente ducimus rerum! Aliquid debitis, quis nam
        cupiditate asperiores magnam adipisci ad repellat. Soluta, sint quae.
        Officiis aliquid cumque debitis at quisquam incidunt accusantium quidem!
        Corrupti quidem voluptatibus vitae cum, magni sed veritatis. Numquam ut
        iure recusandae consequuntur in animi nobis nostrum ipsum fuga rem
        commodi iusto natus, voluptas totam cumque ipsam. Omnis et ut recusandae
        perferendis nesciunt. Perferendis corrupti animi officia sequi.
        Reprehenderit neque similique modi consectetur alias ratione magnam
        delectus porro sequi repudiandae id veritatis quo animi nostrum ullam,
        voluptate beatae, nulla ex itaque eius, illum eveniet architecto
        placeat? Nemo, nisi! Iure, facilis nam? Incidunt expedita facere
        repudiandae, recusandae officiis minima animi quas deserunt blanditiis
        sit quibusdam aliquid distinctio voluptatem enim accusantium debitis
        illum, deleniti vero dignissimos eum nam pariatur minus. Quisquam sint
        libero natus ut odit, quaerat eius consectetur sit aut, illo aperiam
        atque quasi dolorem esse, magni porro totam ratione veritatis?
        Laudantium voluptatibus quae impedit vero necessitatibus corporis
        itaque? Nihil alias doloribus velit facere explicabo dicta quibusdam
        odio ipsam illo, id, porro veniam accusantium ratione! Animi repudiandae
        iusto odio provident, recusandae voluptatibus inventore perferendis
        totam a ipsum rerum tempora. Ullam optio vitae rerum commodi eaque
        soluta nulla quibusdam. Pariatur laborum quaerat veniam nisi, sed error
        necessitatibus minima quisquam veritatis blanditiis est itaque impedit
        nostrum ipsam odio placeat asperiores quibusdam? Perspiciatis doloremque
        minus delectus commodi officiis? Cum quos ullam autem corporis iusto
        alias nihil deserunt. Quaerat ducimus, dolorum consectetur error
        deleniti exercitationem repellat voluptates, quia asperiores nobis odit
        expedita cupiditate. Consectetur quae assumenda tempora blanditiis
        accusantium maiores maxime dolores alias nulla repellendus ipsum,
        consequatur distinctio quia omnis dolore corporis, illum aperiam et
        temporibus. Eveniet reiciendis mollitia veritatis vero. Adipisci,
        architecto? Obcaecati nulla fugit ipsa excepturi quas assumenda
        similique eius, sunt minima maiores quam consectetur distinctio
        veritatis laborum incidunt doloremque harum, enim ut consequuntur
        ratione repudiandae expedita dolor laudantium. Repudiandae, incidunt.
        Vitae nulla, cupiditate culpa, nisi voluptatum ullam impedit doloribus
        aspernatur dolor est porro repellendus eligendi officiis at totam animi,
        delectus nihil! Sunt, voluptatibus architecto incidunt laborum maiores
        velit quos nesciunt. Illum earum alias nesciunt sequi sint animi harum
        libero esse perferendis minima! Dolor quibusdam porro, expedita fugiat,
        explicabo laborum deserunt maiores velit consequuntur aperiam quasi,
        libero eum voluptates cumque repudiandae. Rerum ratione sunt dignissimos
        eaque eius hic voluptatem modi iste accusamus architecto officiis
        recusandae cupiditate magnam culpa, reiciendis quidem, voluptas veniam
        quam dolores sint nihil. Praesentium inventore sapiente similique aut.
        Delectus repellat facilis illum! Numquam fugiat voluptate reiciendis
        doloribus labore inventore qui corrupti unde perferendis dicta esse
        dolorem, id adipisci velit nihil placeat suscipit sequi sed modi
        explicabo quo aliquid! Ea at amet ducimus, dicta, quasi minus sapiente
        nisi porro quae necessitatibus aut. Repellendus sed cupiditate minus
        unde! Obcaecati ullam veniam accusantium laborum natus necessitatibus
        architecto, adipisci a! A, quis! Magnam maxime suscipit optio id hic
        mollitia consequatur nobis quod inventore error quis porro atque nemo
        cum fugiat rerum temporibus, excepturi, neque, quaerat odit voluptate?
        Neque aliquam eaque nostrum labore? Tempore numquam ipsam rerum omnis
        similique, architecto quia in labore eaque itaque reiciendis inventore
        consequatur exercitationem. A, blanditiis dicta nemo ipsam, tempora quo
        dolor sit quia molestias rem, eos quam. Repellendus perspiciatis quasi
        recusandae totam illo, aperiam ullam saepe exercitationem accusantium
        enim fugit quo sapiente delectus adipisci eaque consequatur magni esse,
        neque rerum ut itaque amet. Repellat labore ipsam natus? Quisquam dolore
        dolores mollitia iure. Tenetur soluta minima omnis atque, iste incidunt
        commodi architecto non alias nobis laboriosam minus reiciendis accusamus
        velit at deleniti quam veritatis dolore adipisci iure tempore? Ullam
        pariatur ab, quos dolorem expedita suscipit rem eaque nihil temporibus
        harum. Modi temporibus reiciendis labore sint veritatis. Delectus illo
        molestias eum adipisci dolorum assumenda quidem. Nemo praesentium
        excepturi non. Laboriosam magni eligendi ipsa consectetur modi. Error
        neque sed at corrupti omnis incidunt animi voluptates id hic nihil aut
        eaque, optio, eveniet fuga dolor veniam impedit, ipsum beatae quaerat
        quasi. Eum ea iste tempora error quibusdam officia! Vitae, doloremque.
        Excepturi, temporibus doloremque impedit ea animi at voluptatem dolor
        esse cum atque voluptate quisquam molestiae veritatis voluptas iure
        eaque nam sit! Odio quae sit culpa animi beatae dolor minima adipisci
        deleniti autem error nihil velit tempora, soluta explicabo unde totam
        dolorum nobis facilis, eum ipsum debitis? Odio alias sed quisquam atque.
      </p>
    </div>
  );
}
export default ScrollIndicator;
