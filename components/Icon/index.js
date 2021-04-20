import * as React from 'react';
import styles from './Icon.scss';
import classnames from 'classnames';

const Icon = ({icon, size, color}) => {
    let iconStr;

    switch (icon) {
        case 'logo':
            iconStr =
                'm12 0c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12-12-5.372583-12-12 5.372583-12 12-12zm.9692308 13.0769231h-1.9384616c-.3568609 0-.6461538.2946502-.6461538.6581196v4.6068376c0 .3634695.2892929.6581197.6461538.6581197h1.9384616c.3568609 0 .6461538-.2946502.6461538-.6581197v-4.6068376c0-.3634694-.2892929-.6581196-.6461538-.6581196zm5.3846154-5.34615387h-1.9384616c-.3568609 0-.6461538.31274912-.6461538.6985447v7.21829517c0 .3857956.2892929.6985447.6461538.6985447h1.9384616c.3568609 0 .6461538-.3127491.6461538-.6985447v-7.21829517c0-.38579558-.2892929-.6985447-.6461538-.6985447zm-10.76923082 0h-1.93846153c-.35686092 0-.64615385.31274912-.64615385.6985447v7.21829517c0 .3857956.28929293.6985447.64615385.6985447h1.93846153c.35686092 0 .64615385-.3127491.64615385-.6985447v-7.21829517c0-.38579558-.28929293-.6985447-.64615385-.6985447zm5.38461542-2.73076923h-1.9384616c-.3568609 0-.6461538.29465021-.6461538.65811966v4.60683764c0 .3634694.2892929.6581196.6461538.6581196h1.9384616c.3568609 0 .6461538-.2946502.6461538-.6581196v-4.60683764c0-.36346945-.2892929-.65811966-.6461538-.65811966z';
            break;
        case 'social-flickr':
            iconStr =
                'm10.2988235 12.1487059c0 2.8432941-2.3068235 5.1487059-5.14729409 5.1487059-2.84470588 0-5.15152941-2.3054118-5.15152941-5.1487059 0-2.84329414 2.30682353-5.1487059 5.15152941-5.1487059 2.84047059 0 5.14729409 2.30541176 5.14729409 5.1487059zm13.7011765 0c0 2.8432941-2.3068235 5.1487059-5.1515294 5.1487059-2.8404706 0-5.1472941-2.3068236-5.1472941-5.1487059 0-2.84188237 2.3068235-5.1487059 5.1472941-5.1487059 2.8447059 0 5.1515294 2.30541176 5.1515294 5.1487059zm-1.4117647 0c0-2.0611765-1.6771765-3.73694119-3.7397647-3.73694119-2.0597647 0-3.7355294 1.67717649-3.7355294 3.73694119s1.6757647 3.7369412 3.7355294 3.7369412c2.0625882 0 3.7397647-1.6757647 3.7397647-3.7369412z';
            break;
        case 'social-facebook':
            iconStr =
                'm16.2119848 3.98402989h2.2559966v-3.8159943c-1.0922968-.11358341-2.1898099-.16966073-3.2879951-.16803559-3.2639951 0-5.4959918 1.99203286-5.4959918 5.64002742v3.1439953h-3.6839945v4.27199358h3.6839945v10.9439837h4.4159934v-10.9439837h3.6719945l.5519992-4.27199358h-4.2239937v-2.72399593c0-1.25999812.3359995-2.0759969 2.1119969-2.0759969z';
            break;
        case 'social-twitter':
            iconStr =
                'm24 4.27500848c-.9002719.39117623-1.8528067.64889121-2.8275.765 1.0243342-.59981043 1.7946594-1.55271669 2.1665-2.68-.9684522.56629581-2.0262216.96363563-3.128 1.175-.9376004-.98263026-2.2373209-1.53751022-3.5955-1.53500848-2.721 0-4.923 2.17000848-4.923 4.84500848-.0019292.37208243.0407077.74305707.127 1.105-3.94529688-.18495416-7.63005937-2.02370509-10.15-5.065-.43721258.73706009-.66843394 1.578022-.6695 2.435 0 1.67999152.8765 3.165 2.2 4.035-.78413609-.01860962-1.55220461-.22614935-2.239-.605v.06c0 2.35000002 1.7 4.30500002 3.95 4.75000002-.42310831.112791-.85911593.1699393-1.297.17-.31071062.0005418-.62071522-.0296045-.9255-.09.6255 1.925 2.446 3.325 4.6025 3.365-1.75231073 1.3504622-3.90369076 2.0803696-6.116 2.075-.39269101-.000584-.78501721-.0239567-1.175-.07 2.25058982 1.4371085 4.8667224 2.1972691 7.537 2.1900516 9.068 0 14.022-7.3850516 14.022-13.79005162 0-.21-.0055-.42-.0155-.625.9615447-.68397043 1.7934017-1.53394441 2.4565-2.51z';
            break;
        case 'social-instagram':
            iconStr =
                'm7.2 0h9.6c3.9764502 0 7.2 3.2235498 7.2 7.2v9.6c0 3.9764502-3.2235498 7.2-7.2 7.2h-9.6c-3.9764502 0-7.2-3.2235498-7.2-7.2v-9.6c0-3.9764502 3.2235498-7.2 7.2-7.2zm0 2.4c-2.6509668 0-4.8 2.1490332-4.8 4.8v9.6c0 2.6509668 2.1490332 4.8 4.8 4.8h9.6c2.6509668 0 4.8-2.1490332 4.8-4.8v-9.6c0-2.6509668-2.1490332-4.8-4.8-4.8zm4.8 15.6c-3.3137085 0-6-2.6862916-6-6 0-3.3137085 2.6862915-6 6-6 3.3137084 0 6 2.6862915 6 6 0 3.3137084-2.6862916 6-6 6zm0-2.4c1.988225 0 3.6-1.611775 3.6-3.6s-1.611775-3.6-3.6-3.6-3.6 1.611775-3.6 3.6 1.611775 3.6 3.6 3.6zm6-8.4c-.6627416 0-1.2-.5372583-1.2-1.2s.5372584-1.2 1.2-1.2 1.2.5372583 1.2 1.2-.5372584 1.2-1.2 1.2z';
            break;
        case 'ui-cog':
            iconStr =
                'm12.7531406 0c1.2182344 0 2.2093594.991125 2.2093594 2.20935938v.50957812c.5179219.16546875 1.021125.37434375 1.5045469.62451563l.361125-.361125c.8746406-.87571875 2.2756875-.85003125 3.1249219.00032812l1.0645781 1.06453125c.8507343.84979688.8752031 2.250375-.0002813 3.12492188l-.3608437.36084375c.2501719.48342187.459.98653125.6245156 1.50454687h.5095313c1.2182343 0 2.2094062.991125 2.2094062 2.2093594v1.5062812c0 1.2182344-.9911719 2.2093594-2.2094062 2.2093594h-.5095313c-.1655156.5179688-.3743437 1.021125-.6245156 1.5045469l.361125.361125c.8749687.8740312.8508281 2.27475-.0002813 3.1249219l-1.0646718 1.064625c-.8512032.852375-2.2519219.8736562-3.124875-.0002813l-.3607969-.3607969c-.4834219.250125-.986625.459-1.5045469.6245157v.5095781c0 1.2181406-.991125 2.2092656-2.2094062 2.2092656h-1.5062344c-1.2182344 0-2.20940627-.991125-2.20940627-2.2093594v-.5095781c-.51792188-.1654687-1.021125-.3743437-1.50454688-.6245156l-.361125.361125c-.87464063.8757187-2.2756875.8500312-3.12492187-.0003281l-1.06457813-1.0645313c-.85073438-.8497969-.87520313-2.250375.00028125-3.1249219l.36084375-.3608437c-.25017187-.4834219-.459-.9865313-.62451562-1.5045469h-.50953125c-1.2181875 0-2.20935938-.991125-2.20935938-2.2093594v-1.5062812c0-1.2182344.99117188-2.2093594 2.20940625-2.2093594h.50953125c.16551562-.51796875.37434375-1.021125.62451562-1.50454687l-.36112499-.36107813c-.87496875-.87403125-.85082813-2.27475.00028125-3.12492187l1.06467187-1.064625c.85120313-.852375 2.25192188-.87365625 3.124875.00028125l.36079688.36079687c.48342187-.250125.986625-.459 1.50454687-.62451562v-.50953125c0-1.21823438.991125-2.20935938 2.2094063-2.20935938zm.0000469 1.40625h-1.5062344c-.4428281 0-.8031562.36028125-.8031562.80310937v1.0381875c0 .32067188-.2169375.60070313-.52743753.6808125-.7539375.19457813-1.47675.494625-2.14832812.89179688-.276375.16335937-.62817188.11892187-.85514063-.10804688l-.735375-.73542187c-.3170625-.3174375-.82626562-.31007813-1.1355-.00032813l-1.06532812 1.06528125c-.30853125.30815625-.31884375.81735938-.00028125 1.13554688l.73570312.73570312c.22696875.22696875.27140625.5788125.10804688.85509375-.39717188.67153125-.69717188 1.39434375-.89175 2.14832813-.08015625.3105-.3601875.5273906-.6808125.5273906h-1.0381875c-.44282813.0000469-.80315625.3603281-.80315625.8031563v1.5062812c0 .4428281.36032812.8031094.80315625.8031094h1.03814062c.32067188 0 .60065625.2169375.6808125.5273906.19457813.7539844.494625 1.4767969.89175 2.1483281.16335938.2762813.11892188.628125-.10804687.8550938l-.73542188.7354219c-.31790625.3175312-.30960937.8265937-.00028125 1.1355468l1.06523438 1.0652344c.30876562.3091875.81801562.3182344 1.13554687.0002813l.73565625-.7357031c.16725-.1672032.51520313-.3090938.8551875-.108.67157813.3971718 1.39439063.6972187 2.14832813.8917968.3105.0801094.5274375.3601407.5274375.6808125v1.0381875c0 .4428282.3603281.8031094.8031562.8031094h1.5062344c.4428281 0 .8031563-.3602812.8031563-.8031094v-1.0381875c0-.3206718.2169375-.6007031.5274375-.6808125.7539375-.1945781 1.47675-.494625 2.1483281-.8917969.2763281-.1634062.628125-.1189687.8551406.1080469l.735375.7354219c.3170625.3174375.8262188.3100781 1.1355.0003281l1.0653281-1.0652812c.3085313-.3081563.3188438-.8174063.0002813-1.1355469l-.7357031-.7357031c-.2269688-.2269688-.2714063-.5788125-.1080469-.8550938.3971719-.6715312.6971719-1.3943437.89175-2.1483281.0801562-.3105.3601875-.5273906.6808125-.5273906h1.0381406c.4428281 0 .8031563-.3602813.8031563-.8031094v-1.5062813c0-.4428281-.3603282-.8031093-.8031563-.8031093h-1.0381406c-.3206719 0-.6006563-.2169375-.6808125-.52739065-.1945781-.75398438-.494625-1.47679688-.89175-2.14832813-.1633594-.27628125-.1189219-.628125.1080469-.85509375l.7354218-.73542187c.3179063-.31753125.3096094-.82659375.0002813-1.13554688l-1.0652344-1.06523437c-.3087656-.3091875-.8180156-.31823438-1.1355469-.00028125l-.7356562.73570312c-.2269688.22701563-.5789063.27145313-.8551406.10804688-.6715782-.39717188-1.3943907-.69721875-2.1483282-.89179688-.3105-.08010937-.5274375-.36014062-.5274375-.6808125v-1.03828125c0-.44282812-.3603281-.80310937-.8031562-.80310937zm-.7531875 5.371875c2.8793906 0 5.221875 2.34253125 5.221875 5.221875 0 2.8793438-2.3424844 5.221875-5.221875 5.221875-2.87939062 0-5.221875-2.3425312-5.221875-5.221875 0-2.87934375 2.34248437-5.221875 5.221875-5.221875zm0 1.405875c-2.10398437.000375-3.815625 1.7120625-3.815625 3.816s1.7116875 3.815625 3.815625 3.815625 3.815625-1.7116875 3.815625-3.815625c0-2.03818945-1.6063346-3.70826147-3.6195662-3.81065056z';
            break;
        case 'ui-back':
            iconStr =
                'm12.5240485 3.39749794c.6280597.52453336.6345345 1.37161015.0194245 1.90279389l-.0194245.01649594-6.8050485 5.68321223h16.6574706c.8966505 0 1.6235294.6715729 1.6235294 1.5 0 .8201429-.712414 1.4865529-1.5966814 1.499799l-.026848.000201h-16.6574706l6.8050485 5.6832122c.6280597.5245334.6345345 1.3716102.0194245 1.9027939l-.0194245.016496c-.6280597.5245333-1.6423227.5299409-2.2783453.0162226l-.0197517-.0162226-9.75000002-8.1428572c-.62805969-.5245333-.63453453-1.3716101-.01942453-1.9027939l.01942453-.0164959 9.75000002-8.14285716c.634602-.52999725 1.663495-.52999725 2.298097 0z';
            break;
        case 'ui-menu':
            iconStr =
                'm22.5 19c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.6715729 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.6715729-1.5-1.5s.67157288-1.5 1.5-1.5zm0-8c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-21c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z';
            break;
        case 'ui-about':
            iconStr =
                'm12.0004063 0c6.6267141 0 11.9987811 5.37044185 11.9987811 12.0004063 0 6.6267141-5.3728796 11.9995937-11.9987811 11.9995937-6.62833926 0-12.0004063-5.3728796-12.0004063-11.9995937 0-6.62996445 5.37206704-12.0004063 12.0004063-12.0004063zm0 1.95429152c-5.5500254 0-10.04448959 4.49690198-10.04448959 10.04530218 0 5.5475876 4.49446419 10.0428644 10.04448959 10.0428644 5.5451498 0 10.043677-4.4952768 10.0428644-10.0428644 0-5.54758761-4.4977146-10.04530218-10.0428644-10.04530218zm1.2100059 7.39715592v6.60958086h.7598265v1.3808383h-.7598265v.0095808h-2.3225626v-.0095808h-.9176109v-1.3808383h.9176109v-5.1604791h-.8644566v-1.44491015h.8644566v-.00419161zm-1.23403-3c.6088736 0 .9815698.43383947.9938565.99879489 0 .5538684-.3845278 1.00120511-1.01934 1.00120511-.5956767 0-.9811147-.44733671-.98066-1.00120511 0-.56543746.3981801-.99879489 1.0061435-.99879489z';
            break;
        case 'ui-close':
            iconStr =
                'm5.17191853 3.5485357 6.82808147 6.8284643 6.8280815-6.8284643c.6027614-.60276144 1.4548027-.7279895 1.9030875-.27970471s.3230567 1.30032611-.2797047 1.90308754l-6.8284643 6.82808147 6.8284643 6.8280815c.6027614.6027614.7279895 1.4548027.2797047 1.9030875s-1.3003261.3230567-1.9030875-.2797047l-6.8280815-6.8284643-6.82808147 6.8284643c-.60276143.6027614-1.45480275.7279895-1.90308754.2797047s-.32305673-1.3003261.27970471-1.9030875l6.8284643-6.8280815-6.8284643-6.82808147c-.60276144-.60276143-.7279895-1.45480275-.27970471-1.90308754s1.30032611-.32305673 1.90308754.27970471z';
            break;
        case 'ui-fact':
            iconStr =
                'm11.6853044 0c-4.20129975 0-7.6853044 3.54782609-7.6853044 7.90434783 0 2.66086957 1.02470725 4.79999997 3.07412175 6.23478257v2.5565218c0 .2869565.17932377.573913.38426522.7565217.17932376.1826087.46111826.2869565.71729507.2869565h.10247072l7.04486234-.573913c.5379713-.0521739.9990896-.4956522.9990896-1.0434783v-1.9565217c1.7932377-1.3304348 3.0741217-3.626087 3.0741217-6.26086957-.0256177-4.35652174-3.5096223-7.90434783-7.710922-7.90434783zm3.0741217 12.6521739c-.3330298.1826087-.5123536.5478261-.5123536.9130435v1.5913043l-5.12353626.4173913v-2.0086956c0-.3652174-.15370608-.7043478-.46111826-.9130435-1.76762-1.0434782-2.5873858-2.6086956-2.5873858-4.74782607-.02561768-3.20869566 2.51053276-5.81739131 5.61027222-5.81739131 3.0997394 0 5.6358898 2.60869565 5.6358898 5.81739131-.0256176 2.08695652-.9478542 3.86086957-2.5617681 4.74782607zm1.4345902 6.7304348c.0512353.573913-.3842653 1.0695652-.9478542 1.1217391l-6.99362702.5217392c-.02561768 0-.05123536 0-.07685304 0-.53797131 0-.97347189-.4173913-1.02470725-.9652174-.05123536-.5739131.38426522-1.0695653.94785421-1.1217392l6.993627-.5217391c.5892066-.0521739 1.0759426.3913044 1.1015603.9652174zm-2.2287383 3.2869565c.0512354.5739131-.3842652 1.0695652-.9478542 1.1217391l-2.5105328.2086957c-.0256177 0-.0512353 0-.076853 0-.53797132 0-.9734719-.4173913-1.02470726-.9652174-.05123536-.573913.38426522-1.0695652.94785416-1.1217391l2.5361505-.2086957c.563589-.0260869 1.0503249.3913044 1.0759426.9652174zm1.7932377-14.79130433c-.0512354.46956522-.4355006.83478261-.8966189.83478261-.0256176 0-.0512353 0-.076853 0-.4867359-.05217391-.8453835-.49565218-.7941481-.99130435.1537061-1.48695652-1.127178-2.03478261-1.2808841-2.08695652-.4611182-.1826087-.6916774-.70434783-.5379713-1.17391304.1537061-.46956522.6660597-.73043479 1.127178-.54782609.9478542.33913043 2.6898565 1.6173913 2.4592974 3.96521739z';
            break;
        case 'ui-forward':
            iconStr =
                'm11.4759515 21.6025021c-.591115-.4936785-.631622-1.2730702-.1215209-1.8059064l.1215209-.1133835 6.8050485-5.6832122h-16.65747059c-.89665053 0-1.62352941-.6715729-1.62352941-1.5 0-.7745794.63545569-1.4120328 1.45098741-1.4916292l.172542-.0083708h16.65747059l-6.8050485-5.68321223c-.591115-.49367846-.631622-1.27307012-.1215209-1.80590636l.1215209-.11338347c.586189-.48956447 1.5088041-.52691269 2.1463241-.11204465l.1517729.11204465 9.75 8.14285716c.591115.4936784.631622 1.2730701.1215209 1.8059064l-.1215209.1133834-9.75 8.1428572c-.634602.5299972-1.663495.5299972-2.298097 0z';
            break;
        case 'ui-like':
            iconStr =
                'm23.3567553 5.18601141c-1.1162697-2.53951359-3.5441563-4.18601141-6.1115766-4.18601141-2.5953271 0-4.2697317 1.14417645-5.2464677 2.37207313-.976736-1.22789668-2.65114053-2.37207313-5.2464676-2.37207313-2.56742034 0-4.99530695 1.64649782-6.11157666 4.18601141-1.19998994 2.65114056-.69766857 5.58134859 1.36743039 7.86970149 4.88367998 5.4976283 9.20922507 9.3766655 9.26503857 9.4045723.223254.1953472.4744146.2790674.7534821.2790674.2790674 0 .5302281-.0837202.753482-.2790674.0558135-.0279068 4.3534519-3.9348508 9.2650386-9.4045723 2.0092855-2.2883529 2.5116069-5.21856093 1.3116169-7.86970149z';
            break;
        case 'ui-unlike':
            iconStr =
                'm17.2451787 1c2.5674203 0 4.9953069 1.64649782 6.1115766 4.18601141 1.19999 2.65114056.6976686 5.58134859-1.3116169 7.86970149l-.8676848.9573478-.8501393.9213771-.8280363.8824967-.8013762.8407066-.7701587.7960069-.734384.7483974-1.384313 1.3828561-1.1125498 1.0843659-1.4362323 1.3581164-.4801642.4329014c-.2232539.1953472-.4744146.2790674-.753482.2790674-.2325562 0-.4457327-.0581391-.6395295-.1905669l-.1577066-.1245852-.3598301-.3221463-.8097794-.7500398-1.17589114-1.1218802-1.08514197-1.0631524-.80577105-.80568-1.08632157-1.1079886-.68821171-.7151284-.71155752-.7504929-.97944736-1.0522934-.50071803-.5469744-.50676492-.5600881-.5118498-.5726231c-2.06509896-2.2883529-2.56742033-5.21856093-1.36743039-7.86970149 1.11626971-2.53951359 3.54415632-4.18601141 6.11157666-4.18601141 2.59532707 0 4.2697316 1.14417645 5.2464676 2.37207313.976736-1.22789668 2.6511406-2.37207313 5.2464677-2.37207313zm-.0279068 2.23253942c-2.2771902 0-3.3471689 1.18096779-3.8217898 2.0132689l-.1066061.19992618-.0839239.18008718-.0633664.15493693-.0824184.24245508c-.1279059.43488008-.5137554.77596249-.9640908.82978956l-.1242722.00741273-.1242561-.00687979c-.4092343-.04554226-.7635595-.31395086-.9014782-.7083274l-.055989-.19507269-.0603131-.17593472-.0607917-.15115739c-.0116782-.02725084-.0241565-.05546476-.0374749-.08454295l-.090315-.18404971-.1124116-.20004857c-.496415-.82586731-1.56950329-1.92186334-3.7755313-1.92186334-1.67440457 0-3.32090239 1.14417645-4.10229119 2.84648776-.80929554 1.86975176-.44650788 3.8511305 1.00464274 5.49762832l.87895561.9767409c.1451054.1595747.2894481.3175015.43292443.47372l.84963225.9163301c.13959621.1491443.27811871.2964598.41546387.4418862l.80911332.8494054.77588095.8011701.73767276.75004.84245456.8430567 1.1849067 1.1618596.7892314.7584845.6278802.5946765.9197297-.8758673.9968048-.969547 1.1749851-1.1675369 1.048596-1.0640575.8399607-.8676303.5819419-.6093204.5973295-.6326489.9207458-.990105.6275978-.6857516.6364248-.7049051c1.4511506-1.64649782 1.8139383-3.62787656.976736-5.46972158-.7813888-1.73021805-2.4278866-2.8743945-4.1022912-2.8743945z';
            break;
        default:
            iconStr = '';
    }

    return (
        <svg viewBox="0 0 24 24" className={styles['icon']} width={size} height={size}>
            <path d={iconStr}></path>
        </svg>
    );
};

export default Icon;
