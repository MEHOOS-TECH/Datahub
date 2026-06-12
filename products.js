/**
 * products.js — DataResell Pro
 * Edit this file to update prices, add/remove bundles and social services.
 * The app loads this file at runtime — no redeployment of index.html needed.
 */
"use strict";

/* ── Profit margin on SMM services (35% markup) ── */
const SMM_PROFIT_MARGIN = 0.35;

/* ── Helper: reseller-facing price for a social service ── */
const getSocialBasePrice = (s) => parseFloat((s.basePriceGHS * (1 + SMM_PROFIT_MARGIN)).toFixed(2));

const BASE_BUNDLES = {
    MTN: [
        { id: "mtn_1gb", label: "1GB", base: 4.40 },
        { id: "mtn_2gb", label: "2GB", base: 8.70 },
        { id: "mtn_3gb", label: "3GB", base: 12.80 },
        { id: "mtn_4gb", label: "4GB", base: 17.00 },
        { id: "mtn_5gb", label: "5GB", base: 22.00 },
        { id: "mtn_10gb_700", label: "10GB +700 Mins", base: 35.00, highlight: true, badge: "🔥 Best Deal" },
        { id: "mtn_10gb", label: "10GB", base: 41.00 },
        { id: "mtn_25gb", label: "25GB", base: 98.00 },
        { id: "mtn_50gb", label: "50GB", base: 193.00 },
    ],
    AirtelTigo: [
        { id: "at_1gb", label: "1GB", base: 4.40, outOfStock: true },
        { id: "at_2gb", label: "2GB", base: 8.70, outOfStock: true },
        { id: "at_3gb", label: "3GB", base: 12.80, outOfStock: true },
        { id: "at_5gb", label: "5GB", base: 22.00, outOfStock: true },
        { id: "at_10gb", label: "10GB", base: 41.00, outOfStock: true },
    ],
    Telecel: [
        { id: "tc_1gb", label: "1GB", base: 4.40, outOfStock: true },
        { id: "tc_2gb", label: "2GB", base: 8.70, outOfStock: true },
        { id: "tc_3gb", label: "3GB", base: 12.80, outOfStock: true },
        { id: "tc_5gb", label: "5GB", base: 22.00, outOfStock: true },
        { id: "tc_10gb", label: "10GB", base: 41.00, outOfStock: true },
    ],
};

/* ── Social Media Services (powered by smmghana.com) ──
   smmServiceId: the real service ID from smmghana.com /api/v2 action=services
   basePriceGHS: what smmghana.com charges YOU (their rate)
   Displayed price to reseller/customer = basePriceGHS × (1 + SMM_PROFIT_MARGIN)
   ── */
const SOCIAL_SERVICES = [
     // Instagram
    { id: "ig_reel_views_1",   smmServiceId: "435", category: "Instagram", platform: "Instagram", name: "Video / Reel Views | Cheap",              basePriceGHS: 0.02,  per: 1000, unit: "Views",     icon: "🎬", color: "#E1306C" },
    { id: "ig_reel_views_2",   smmServiceId: "116", category: "Instagram", platform: "Instagram", name: "Video / Reel Views | Cheapest",           basePriceGHS: 0.03,  per: 1000, unit: "Views",     icon: "🎬", color: "#E1306C" },
    { id: "ig_story_views_1",  smmServiceId: "117", category: "Instagram", platform: "Instagram", name: "Story Views | Cheap",                     basePriceGHS: 0.13,  per: 1000, unit: "Views",     icon: "🎞️", color: "#E1306C" },
    { id: "ig_story_views_2",  smmServiceId: "393", category: "Instagram", platform: "Instagram", name: "Story Viewers | All",                     basePriceGHS: 0.57,  per: 1000, unit: "Views",     icon: "🎞️", color: "#E1306C" },
    { id: "ig_story_views_3",  smmServiceId: "394", category: "Instagram", platform: "Instagram", name: "Story Viewers HQ (All Story)",            basePriceGHS: 0.62,  per: 1000, unit: "Views",     icon: "🎞️", color: "#E1306C" },
    { id: "ig_post_share",     smmServiceId: "235", category: "Instagram", platform: "Instagram", name: "Post Shares",                             basePriceGHS: 0.27,  per: 1000, unit: "Shares",    icon: "📤", color: "#E1306C" },
    { id: "ig_post_saves",     smmServiceId: "234", category: "Instagram", platform: "Instagram", name: "Post Saves [Instant]",                    basePriceGHS: 0.34,  per: 1000, unit: "Saves",     icon: "🔖", color: "#E1306C" },
    { id: "ig_likes_cheap1",   smmServiceId: "115", category: "Instagram", platform: "Instagram", name: "Likes | Cheapest",                        basePriceGHS: 0.57,  per: 1000, unit: "Likes",     icon: "❤️", color: "#E1306C" },
    { id: "ig_likes_cheap2",   smmServiceId: "285", category: "Instagram", platform: "Instagram", name: "Likes | Cheap",                           basePriceGHS: 0.94,  per: 1000, unit: "Likes",     icon: "❤️", color: "#E1306C" },
    { id: "ig_likes_nd",       smmServiceId: "220", category: "Instagram", platform: "Instagram", name: "Likes | Non Drop",                        basePriceGHS: 1.34,  per: 1000, unit: "Likes",     icon: "❤️", color: "#E1306C" },
    { id: "ig_followers_1",    smmServiceId: "392", category: "Instagram", platform: "Instagram", name: "Followers [Cheapest] ~ REFILL 365D",      basePriceGHS: 3.14,  per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_2",    smmServiceId: "222", category: "Instagram", platform: "Instagram", name: "Followers [1k/day] ~ REFILL 30D",         basePriceGHS: 3.18,  per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_3",    smmServiceId: "391", category: "Instagram", platform: "Instagram", name: "Followers [Flag OFF] ~ REFILL 365D",      basePriceGHS: 5.24,  per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_4",    smmServiceId: "219", category: "Instagram", platform: "Instagram", name: "Followers HQ Real ~ REFILL 365D",         basePriceGHS: 3.91,  per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_5",    smmServiceId: "217", category: "Instagram", platform: "Instagram", name: "Followers [10k/day] ~ REFILL 30D",        basePriceGHS: 4.77,  per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_rand_comments",  smmServiceId: "119", category: "Instagram", platform: "Instagram", name: "Random Comments",                         basePriceGHS: 9.40,  per: 1000, unit: "Comments",  icon: "💬", color: "#E1306C" },
    { id: "ig_custom_comments",smmServiceId: "118", category: "Instagram", platform: "Instagram", name: "Custom Comments",                         basePriceGHS: 19.56, per: 1000, unit: "Comments",  icon: "💬", color: "#E1306C" },
    { id: "ig_live_15",        smmServiceId: "239", category: "Instagram", platform: "Instagram", name: "Live Views [15 min]",                     basePriceGHS: 3.04,  per: 1000, unit: "Views",     icon: "🔴", color: "#E1306C" },
    { id: "ig_live_30",        smmServiceId: "238", category: "Instagram", platform: "Instagram", name: "Live Views [30 min]",                     basePriceGHS: 6.02,  per: 1000, unit: "Views",     icon: "🔴", color: "#E1306C" },
    { id: "ig_live_60",        smmServiceId: "240", category: "Instagram", platform: "Instagram", name: "Live Views [60 min]",                     basePriceGHS: 11.93, per: 1000, unit: "Views",     icon: "🔴", color: "#E1306C" },
    // TikTok
    { id: "tt_views_cheap1",   smmServiceId: "445", category: "TikTok/General", platform: "TikTok", name: "Views | Super Cheap",                   basePriceGHS: 0.33,  per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_cheap2",   smmServiceId: "404", category: "TikTok/General", platform: "TikTok", name: "Views | Super Cheap [Fast]",            basePriceGHS: 0.37,  per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_fast",     smmServiceId: "440", category: "TikTok/General", platform: "TikTok", name: "Views | FAST",                          basePriceGHS: 0.72,  per: 1000, unit: "Views",     icon: "🚀", color: "#00e5ff" },
    { id: "tt_views_ultra",    smmServiceId: "225", category: "TikTok/General", platform: "TikTok", name: "Views | ULTRA FAST",                    basePriceGHS: 1.54,  per: 1000, unit: "Views",     icon: "⚡", color: "#00e5ff" },
    { id: "tt_views_nd",       smmServiceId: "196", category: "TikTok/General", platform: "TikTok", name: "Views | Non Drop ~ 500k/day",           basePriceGHS: 2.01,  per: 1000, unit: "Views",     icon: "🛡️", color: "#00e5ff" },
    { id: "tt_video_save",     smmServiceId: "215", category: "TikTok/General", platform: "TikTok", name: "Video Save",                            basePriceGHS: 0.04,  per: 1000, unit: "Saves",     icon: "🔖", color: "#00e5ff" },
    { id: "tt_shares",         smmServiceId: "207", category: "TikTok/General", platform: "TikTok", name: "Shares",                               basePriceGHS: 0.87,  per: 1000, unit: "Shares",    icon: "↗️", color: "#00e5ff" },
    { id: "tt_likes_cheap1",   smmServiceId: "442", category: "TikTok/General", platform: "TikTok", name: "Likes | Speed",                        basePriceGHS: 0.70,  per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },
    { id: "tt_likes_cheap2",   smmServiceId: "224", category: "TikTok/General", platform: "TikTok", name: "Likes | Super Cheap",                  basePriceGHS: 0.80,  per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },
    { id: "tt_likes_nd1",      smmServiceId: "444", category: "TikTok/General", platform: "TikTok", name: "Likes | Real Non Drop",                basePriceGHS: 3.27,  per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },
    { id: "tt_likes_nd2",      smmServiceId: "441", category: "TikTok/General", platform: "TikTok", name: "Likes | Real Non Drop ~ Lifetime",     basePriceGHS: 4.86,  per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },
    { id: "tt_story_views",    smmServiceId: "209", category: "TikTok/General", platform: "TikTok", name: "Story Viewers [All Stories]",           basePriceGHS: 1.83,  per: 1000, unit: "Views",     icon: "🎞️", color: "#7b61ff" },
    { id: "tt_add_fav",        smmServiceId: "229", category: "TikTok/General", platform: "TikTok", name: "Add Favorites | REFILL 365D",           basePriceGHS: 0.19,  per: 1000, unit: "Favs",      icon: "⭐", color: "#7b61ff" },
    { id: "tt_followers_1",    smmServiceId: "382", category: "TikTok/General", platform: "TikTok", name: "Followers | HQ Accounts",              basePriceGHS: 2.92,  per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_2",    smmServiceId: "380", category: "TikTok/General", platform: "TikTok", name: "Followers | No Refill",                basePriceGHS: 5.74,  per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_nd",   smmServiceId: "228", category: "TikTok/General", platform: "TikTok", name: "Followers | Real HQ ~ Lifetime Refill",basePriceGHS: 20.27, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_live_views_15",  smmServiceId: "353", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [15 min]",           basePriceGHS: 2.19,  per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_views_30",  smmServiceId: "354", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [30 min]",           basePriceGHS: 3.71,  per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_views_60",  smmServiceId: "355", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [60 min]",           basePriceGHS: 7.43,  per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_likes",     smmServiceId: "199", category: "TikTok/General", platform: "TikTok", name: "Livestream Likers",                     basePriceGHS: 0.43,  per: 1000, unit: "Likes",     icon: "❤️", color: "#00e5ff" },
    { id: "tt_battle_pts",     smmServiceId: "231", category: "TikTok/General", platform: "TikTok", name: "Live PK Battle Points",                 basePriceGHS: 1.59,  per: 1000, unit: "Points",    icon: "⚔️", color: "#00e5ff" },
    { id: "tt_comment_lk",     smmServiceId: "198", category: "TikTok/General", platform: "TikTok", name: "Comment Likes [HQ]",                    basePriceGHS: 1.90,  per: 1000, unit: "Likes",     icon: "💬", color: "#7b61ff" },
    // Facebook
    { id: "fb_views_1",        smmServiceId: "348", category: "TikTok/General", platform: "Facebook", name: "Facebook Video/Reel Views",            basePriceGHS: 0.18,  per: 1000, unit: "Views",     icon: "📘", color: "#1877F2" },
    { id: "fb_post_likes_1",   smmServiceId: "411", category: "TikTok/General", platform: "Facebook", name: "Facebook Post Likes | Cheap",          basePriceGHS: 0.76,  per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },
    { id: "fb_post_likes_nd",  smmServiceId: "147", category: "TikTok/General", platform: "Facebook", name: "Facebook Post Likes | Non Drop",       basePriceGHS: 1.14,  per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },
    { id: "fb_followers_1",    smmServiceId: "360", category: "TikTok/General", platform: "Facebook", name: "Facebook Profile/Page Followers | R30", basePriceGHS: 0.87, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_page_likes",     smmServiceId: "377", category: "TikTok/General", platform: "Facebook", name: "Facebook Page Likes + Followers R30D",  basePriceGHS: 2.39, per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },
];


/* ── Bulk SMS Plans ── */
const SMS_PLANS = [
    { id: "sms_1000", label: "1,000 SMS", count: 1000, price: 20, badge: "Starter" },
    { id: "sms_2000", label: "2,000 SMS", count: 2000, price: 35, badge: "Popular", highlight: true },
    { id: "sms_4000", label: "4,000 SMS", count: 4000, price: 50, badge: "Best Value" },
];
