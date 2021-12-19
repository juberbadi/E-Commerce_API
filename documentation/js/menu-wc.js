'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">flipkart-clone documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' : 'data-target="#xs-controllers-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' :
                                            'id="xs-controllers-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' : 'data-target="#xs-injectables-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' :
                                        'id="xs-injectables-links-module-AppModule-3867578b7a3a3893046facb4e39b4d14ed736fcb50af8f53733cd3c4fa3e0b4f25a5dddf310f8ce0879e858f909b2d05d41c292db8ce80e14dcd99a7fbd9ed20"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' : 'data-target="#xs-controllers-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' :
                                            'id="xs-controllers-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' : 'data-target="#xs-injectables-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' :
                                        'id="xs-injectables-links-module-AuthModule-5b51ca1dbd503d4e6b8f4fd0d6ed906d5ed5fa801b416901dc73e21566f0d1726d455ce51679ecd0e1a9b7ed7eec422e942574c1f0ccc0a4f736888c04c0b59b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' : 'data-target="#xs-controllers-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' :
                                            'id="xs-controllers-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' }>
                                            <li class="link">
                                                <a href="controllers/CategoryController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' : 'data-target="#xs-injectables-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' :
                                        'id="xs-injectables-links-module-CategoryModule-d5230b602964538d68d2f8eb65bde0067d7c888b7c6b56418e689a82245dab9f8123b8cfc2e96c134911473f36c9a30ceccf312e528a23edd0555c363bb1ef6e"' }>
                                        <li class="link">
                                            <a href="injectables/CategoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeliveryAddressModule.html" data-type="entity-link" >DeliveryAddressModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' : 'data-target="#xs-controllers-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' :
                                            'id="xs-controllers-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' }>
                                            <li class="link">
                                                <a href="controllers/DeliveryAddressController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeliveryAddressController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' : 'data-target="#xs-injectables-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' :
                                        'id="xs-injectables-links-module-DeliveryAddressModule-899650a39b8507719d764f975f9e305ddbeed978507661cd42dd039d802a916f51f8e291dda38ae086906c8e97415baeeaf97e0cb30086035ccaef77984053b3"' }>
                                        <li class="link">
                                            <a href="injectables/DeliveryAddressService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeliveryAddressService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' : 'data-target="#xs-controllers-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' :
                                            'id="xs-controllers-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' }>
                                            <li class="link">
                                                <a href="controllers/OrdersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' : 'data-target="#xs-injectables-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' :
                                        'id="xs-injectables-links-module-OrdersModule-ae5b0e09e5e39d264cd9f03016b92d085c388041aad9512e865bb818cf36d8ae54318963057c59d93873ace57cbfb736dfee97a9ce69dd4547434dbe20aa52de"' }>
                                        <li class="link">
                                            <a href="injectables/OrdersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrdersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' : 'data-target="#xs-controllers-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' :
                                            'id="xs-controllers-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' : 'data-target="#xs-injectables-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' :
                                        'id="xs-injectables-links-module-ProductsModule-9de501ed06e90bf733875d96354e85aad995b6faad5857c55823e626f4ccff280a59ba9a13f15d36e6e21b2558a5038f3b9e61d2116ef0c00834e6938f4bb516"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthCredentialsDto.html" data-type="entity-link" >AuthCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/CategoryRepository.html" data-type="entity-link" >CategoryRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDeliveryAddressDto.html" data-type="entity-link" >CreateDeliveryAddressDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrderDto.html" data-type="entity-link" >CreateOrderDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeliveryAddress.html" data-type="entity-link" >DeliveryAddress</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeliveryAddressRepository.html" data-type="entity-link" >DeliveryAddressRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrdersRepository.html" data-type="entity-link" >OrdersRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductsRepository.html" data-type="entity-link" >ProductsRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInDto.html" data-type="entity-link" >SignInDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UsersRepository.html" data-type="entity-link" >UsersRepository</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayload.html" data-type="entity-link" >JwtPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});