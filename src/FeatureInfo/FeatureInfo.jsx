import React from 'react'
import "./featureInfo.css";
import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
export default function FeatureInfo() {
    return (
        <div className='Feature'>
            <div className="featureItem">
                <span className="featureTittle">Revanue</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,3018</span>
                    <span className="featureMoneyRate">-13.08 <ArrowDownward className='featureIcons negative'/> </span>
                </div>
                <span className="featureSub">Compare to last Month</span>

            </div>

            <div className="featureItem">
                <span className="featureTittle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$5,3308</span>
                    <span className="featureMoneyRate">-13.08 <ArrowDownward className='featureIcons negative'/> </span>
                </div>
                <span className="featureSub">Compare to last Month</span>

            </div>

            <div className="featureItem">
                <span className="featureTittle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featureMoney">$2,4536</span>
                    <span className="featureMoneyRate">+09.08 <ArrowUpward className='featureIcons'/> </span>
                </div>
                <span className="featureSub">Compare to last Month</span>

            </div>
        </div>
    )
}
