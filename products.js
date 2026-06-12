/**
 * products.js — DataResell Pro
 *
 * Central product catalogue for all three service types:
 *   1. DATA BUNDLES   — BASE_BUNDLES
 *   2. SOCIAL MEDIA   — SOCIAL_SERVICES
 *   3. BULK SMS       — SMS_PLANS
 *
 * Import / reference this file wherever product data is needed.
 * Prices are base (reseller cost). Customer-facing prices are set
 * by each reseller via their custom pricing overrides.
 */

"use strict";

/* ─────────────────────────────────────────────
   1.  DATA BUNDLES
   base = reseller cost in GHS
   outOfStock = true  →  hidden from storefronts
   highlight / badge  →  visual treatment in UI
   ───────────────────────────────────────────── */
const BASE_BUNDLES = {
    MTN: [
        { id: "mtn_1gb",      label: "1GB",           base: 4.40  },
        { id: "mtn_2gb",      label: "2GB",           base: 8.70  },
        { id: "mtn_3gb",      label: "3GB",           base: 12.80 },
        { id: "mtn_4gb",      label: "4GB",           base: 17.00 },
        { id: "mtn_5gb",      label: "5GB",           base: 22.00 },
        { id: "mtn_10gb_700", label: "10GB +700 Mins", base: 35.00, highlight: true, badge: "🔥 Best Deal" },
        { id: "mtn_10gb",     label: "10GB",          base: 41.00 },
        { id: "mtn_25gb",     label: "25GB",          base: 98.00 },
        { id: "mtn_50gb",     label: "50GB",          base: 193.00 },
    ],
    AirtelTigo: [
        { id: "at_1gb",  label: "1GB",  base: 4.40,  outOfStock: true },
        { id: "at_2gb",  label: "2GB",  base: 8.70,  outOfStock: true },
        { id: "at_3gb",  label: "3GB",  base: 12.80, outOfStock: true },
        { id: "at_5gb",  label: "5GB",  base: 22.00, outOfStock: true },
        { id: "at_10gb", label: "10GB", base: 41.00, outOfStock: true },
    ],
    Telecel: [
        { id: "tc_1gb",  label: "1GB",  base: 4.40,  outOfStock: true },
        { id: "tc_2gb",  label: "2GB",  base: 8.70,  outOfStock: true },
        { id: "tc_3gb",  label: "3GB",  base: 12.80, outOfStock: true },
        { id: "tc_5gb",  label: "5GB",  base: 22.00, outOfStock: true },
        { id: "tc_10gb", label: "10GB", base: 41.00, outOfStock: true },
    ],
};

/* ─────────────────────────────────────────────
   2.  SOCIAL MEDIA SERVICES  (via smmghana.com)
   smmServiceId  = real service ID from smmghana.com
   basePriceGHS  = what smmghana.com charges us per 1 000 units
   Displayed price to reseller = basePriceGHS × (1 + SMM_PROFIT_MARGIN)
   ───────────────────────────────────────────── */

/** Markup applied on top of smmghana.com wholesale prices. */
const SMM_PROFIT_MARGIN = 0.35; // 35 %

/** Returns the reseller-facing price for a social service. */
const getSocialBasePrice = (s) =>
    parseFloat((s.basePriceGHS * (1 + SMM_PROFIT_MARGIN)).toFixed(2));

const SOCIAL_SERVICES = [

    // ══════════════════════════════════════════════════════════════════════
    // INSTAGRAM
    // ══════════════════════════════════════════════════════════════════════

    // ── Instagram : Views ─────────────────────────────────────────────────
    { id: "ig_views_1",          smmServiceId: "435", category: "Instagram", platform: "Instagram", name: "Video / Reel Views | Cheap",                    basePriceGHS: 0.001883, per: 1000, unit: "Views",     icon: "🎬", color: "#E1306C" },
    { id: "ig_views_2",          smmServiceId: "116", category: "Instagram", platform: "Instagram", name: "Video / Reel Views | Cheapest",                 basePriceGHS: 0.002472, per: 1000, unit: "Views",     icon: "🎬", color: "#E1306C" },

    // ── Instagram : Likes [ Cheapest ] ────────────────────────────────────
    { id: "ig_likes_cheap1",     smmServiceId: "115", category: "Instagram", platform: "Instagram", name: "Likes | Cheapest",                              basePriceGHS: 0.051414, per: 1000, unit: "Likes",     icon: "❤️", color: "#E1306C" },
    { id: "ig_likes_cheap2",     smmServiceId: "285", category: "Instagram", platform: "Instagram", name: "Likes | Cheap",                                 basePriceGHS: 0.084744, per: 1000, unit: "Likes",     icon: "❤️", color: "#E1306C" },

    // ── Instagram : Likes [ Non Drop ] ────────────────────────────────────
    { id: "ig_likes_nd",         smmServiceId: "220", category: "Instagram", platform: "Instagram", name: "Likes | Non Drop",                              basePriceGHS: 0.121378, per: 1000, unit: "Likes",     icon: "❤️", color: "#E1306C" },

    // ── Instagram : Followers [ Cheapest ] ───────────────────────────────
    { id: "ig_followers_1",      smmServiceId: "392", category: "Instagram", platform: "Instagram", name: "Followers [Cheapest] ~ REFILL 365D",            basePriceGHS: 0.28368,  per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_2",      smmServiceId: "222", category: "Instagram", platform: "Instagram", name: "Followers [1k/day] ~ REFILL 30D",               basePriceGHS: 0.286894, per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },

    // ── Instagram : Followers [ Non Drop ] ───────────────────────────────
    { id: "ig_followers_nd1",    smmServiceId: "391", category: "Instagram", platform: "Instagram", name: "Followers [Flag OFF] ~ 20k/day ~ REFILL 365D",  basePriceGHS: 0.4728,   per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_nd2",    smmServiceId: "217", category: "Instagram", platform: "Instagram", name: "Followers [10k/day] ~ REFILL 30D",              basePriceGHS: 0.430341, per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_nd3",    smmServiceId: "219", category: "Instagram", platform: "Instagram", name: "Followers HQ Real ~ REFILL 365D",               basePriceGHS: 0.3531,   per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_nd4",    smmServiceId: "218", category: "Instagram", platform: "Instagram", name: "Followers [Flag OFF] ~ 2k/day ~ REFILL 365D",   basePriceGHS: 0.52965,  per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_nd5",    smmServiceId: "162", category: "Instagram", platform: "Instagram", name: "Followers [Bullet Speed] ~ 50k/day ~ REFILL 90D",basePriceGHS: 0.7062,   per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },
    { id: "ig_followers_hq",     smmServiceId: "408", category: "Instagram", platform: "Instagram", name: "Followers | High Quality Accounts | R365",      basePriceGHS: 0.178904, per: 1000, unit: "Followers", icon: "👥", color: "#E1306C" },

    // ── Instagram : Saves ────────────────────────────────────────────────
    { id: "ig_saves",            smmServiceId: "234", category: "Instagram", platform: "Instagram", name: "Post Saves [Instant]",                          basePriceGHS: 0.031073, per: 1000, unit: "Saves",     icon: "🔖", color: "#E1306C" },

    // ── Instagram : Shares ───────────────────────────────────────────────
    { id: "ig_shares",           smmServiceId: "235", category: "Instagram", platform: "Instagram", name: "Post Shares",                                   basePriceGHS: 0.024717, per: 1000, unit: "Shares",    icon: "📤", color: "#E1306C" },

    // ── Instagram : Story Services ───────────────────────────────────────
    { id: "ig_story_views_1",    smmServiceId: "117", category: "Instagram", platform: "Instagram", name: "Story Views | Cheap",                           basePriceGHS: 0.011917, per: 1000, unit: "Views",     icon: "🎞️", color: "#E1306C" },
    { id: "ig_story_views_2",    smmServiceId: "393", category: "Instagram", platform: "Instagram", name: "Story Viewers | All",                           basePriceGHS: 0.051788, per: 1000, unit: "Views",     icon: "🎞️", color: "#E1306C" },
    { id: "ig_story_views_3",    smmServiceId: "394", category: "Instagram", platform: "Instagram", name: "Story Viewers HQ (All Story)",                  basePriceGHS: 0.055931, per: 1000, unit: "Views",     icon: "🎞️", color: "#E1306C" },

    // ── Instagram : Comments ─────────────────────────────────────────────
    { id: "ig_rand_comments",    smmServiceId: "119", category: "Instagram", platform: "Instagram", name: "Random Comments",                               basePriceGHS: 0.848676, per: 1000, unit: "Comments",  icon: "💬", color: "#E1306C" },
    { id: "ig_custom_comments1", smmServiceId: "118", category: "Instagram", platform: "Instagram", name: "Custom Comments",                               basePriceGHS: 1.7655,   per: 1000, unit: "Comments",  icon: "💬", color: "#E1306C" },
    { id: "ig_custom_comments2", smmServiceId: "421", category: "Instagram", platform: "Instagram", name: "Custom Comments [Alt]",                         basePriceGHS: 2.206875, per: 1000, unit: "Comments",  icon: "💬", color: "#E1306C" },
    { id: "ig_emoji_comments",   smmServiceId: "236", category: "Instagram", platform: "Instagram", name: "Emoji Comments [Positive]",                     basePriceGHS: 1.7655,   per: 1000, unit: "Comments",  icon: "😍", color: "#E1306C" },

    // ── Instagram : Live Views ───────────────────────────────────────────
    { id: "ig_live_15",          smmServiceId: "239", category: "Instagram", platform: "Instagram", name: "Live Views [15 min]",                           basePriceGHS: 0.273947, per: 1000, unit: "Views",     icon: "🔴", color: "#E1306C" },
    { id: "ig_live_30",          smmServiceId: "238", category: "Instagram", platform: "Instagram", name: "Live Views [30 min]",                           basePriceGHS: 0.543002, per: 1000, unit: "Views",     icon: "🔴", color: "#E1306C" },
    { id: "ig_live_60",          smmServiceId: "240", category: "Instagram", platform: "Instagram", name: "Live Views [60 min]",                           basePriceGHS: 1.076217, per: 1000, unit: "Views",     icon: "🔴", color: "#E1306C" },
    { id: "ig_live_120",         smmServiceId: "241", category: "Instagram", platform: "Instagram", name: "Live Views [120 min]",                          basePriceGHS: 2.142655, per: 1000, unit: "Views",     icon: "🔴", color: "#E1306C" },

    // ── Instagram : Channel Member ────────────────────────────────────────
    { id: "ig_channel_member",   smmServiceId: "237", category: "Instagram", platform: "Instagram", name: "Channel Member [Organic & Real ~ Global]",      basePriceGHS: 4.861198, per: 1000, unit: "Members",   icon: "🌐", color: "#E1306C" },

    // ── Instagram : Ghana Services 🇬🇭 ──────────────────────────────────
    { id: "ig_gh_story",         smmServiceId: "261", category: "Instagram", platform: "Instagram 🇬🇭", name: "Story Viewers Ghana",                      basePriceGHS: 13.24125, per: 1000, unit: "Views",     icon: "🇬🇭", color: "#E1306C" },
    { id: "ig_gh_likes",         smmServiceId: "262", category: "Instagram", platform: "Instagram 🇬🇭", name: "Likes Ghana",                              basePriceGHS: 17.655,   per: 1000, unit: "Likes",     icon: "🇬🇭", color: "#E1306C" },
    { id: "ig_gh_comments",      smmServiceId: "263", category: "Instagram", platform: "Instagram 🇬🇭", name: "Comments Ghana",                           basePriceGHS: 17.655,   per: 1000, unit: "Comments",  icon: "🇬🇭", color: "#E1306C" },
    { id: "ig_gh_followers",     smmServiceId: "264", category: "Instagram", platform: "Instagram 🇬🇭", name: "Followers Ghana",                          basePriceGHS: 22.06875, per: 1000, unit: "Followers", icon: "🇬🇭", color: "#E1306C" },

    // ══════════════════════════════════════════════════════════════════════
    // TIKTOK
    // ══════════════════════════════════════════════════════════════════════

    // ── TikTok : Views [ Cheapest ] ──────────────────────────────────────
    { id: "tt_views_c1",         smmServiceId: "445", category: "TikTok/General", platform: "TikTok", name: "Views | Super Cheap",                        basePriceGHS: 0.029686, per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_c2",         smmServiceId: "404", category: "TikTok/General", platform: "TikTok", name: "Views | Super Cheap [Fast]",                 basePriceGHS: 0.03316,  per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_c3",         smmServiceId: "446", category: "TikTok/General", platform: "TikTok", name: "Views | Super Cheap [Alt]",                  basePriceGHS: 0.038591, per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_c4",         smmServiceId: "123", category: "TikTok/General", platform: "TikTok", name: "Views | Super Cheap [Slow]",                 basePriceGHS: 0.008026, per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_c5",         smmServiceId: "122", category: "TikTok/General", platform: "TikTok", name: "Video Views | Cheap [Fast]",                 basePriceGHS: 0.046423, per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_c6",         smmServiceId: "121", category: "TikTok/General", platform: "TikTok", name: "Video Views | Cheap",                        basePriceGHS: 0.046344, per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },
    { id: "tt_views_slow",       smmServiceId: "434", category: "TikTok/General", platform: "TikTok", name: "Views | Super Cheap | Slow Delivery",        basePriceGHS: 0.057379, per: 1000, unit: "Views",     icon: "👁️", color: "#00e5ff" },

    // ── TikTok : Views [ Best Speed ] ────────────────────────────────────
    { id: "tt_views_fast1",      smmServiceId: "440", category: "TikTok/General", platform: "TikTok", name: "Views | FAST",                               basePriceGHS: 0.065308, per: 1000, unit: "Views",     icon: "🚀", color: "#00e5ff" },
    { id: "tt_views_fast2",      smmServiceId: "439", category: "TikTok/General", platform: "TikTok", name: "Views | FAST [Alt]",                         basePriceGHS: 0.065308, per: 1000, unit: "Views",     icon: "🚀", color: "#00e5ff" },
    { id: "tt_views_top",        smmServiceId: "433", category: "TikTok/General", platform: "TikTok", name: "Views | TOP SPEED",                          basePriceGHS: 0.057379, per: 1000, unit: "Views",     icon: "⚡", color: "#00e5ff" },
    { id: "tt_views_ultra",      smmServiceId: "225", category: "TikTok/General", platform: "TikTok", name: "Views | ULTRA FAST",                         basePriceGHS: 0.139033, per: 1000, unit: "Views",     icon: "⚡", color: "#00e5ff" },

    // ── TikTok : Views [ Non Drop ] ──────────────────────────────────────
    { id: "tt_views_nd1",        smmServiceId: "196", category: "TikTok/General", platform: "TikTok", name: "Views | Non Drop ~ 500k/day",                basePriceGHS: 0.180966, per: 1000, unit: "Views",     icon: "🛡️", color: "#00e5ff" },
    { id: "tt_views_nd2",        smmServiceId: "223", category: "TikTok/General", platform: "TikTok", name: "Views | R30 | Authentic",                    basePriceGHS: 0.404546, per: 1000, unit: "Views",     icon: "🛡️", color: "#00e5ff" },

    // ── TikTok : Likes [ Cheapest ] ──────────────────────────────────────
    { id: "tt_likes_c1",         smmServiceId: "442", category: "TikTok/General", platform: "TikTok", name: "Likes | SPEED",                              basePriceGHS: 0.062739, per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },
    { id: "tt_likes_c2",         smmServiceId: "224", category: "TikTok/General", platform: "TikTok", name: "Likes | Super Cheap",                        basePriceGHS: 0.072214, per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },
    { id: "tt_likes_c3",         smmServiceId: "124", category: "TikTok/General", platform: "TikTok", name: "Likes | Cheap",                              basePriceGHS: 0.079582, per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },
    { id: "tt_likes_nr",         smmServiceId: "406", category: "TikTok/General", platform: "TikTok", name: "Likes | No Refill",                          basePriceGHS: 0.010593, per: 1000, unit: "Likes",     icon: "❤️", color: "#7b61ff" },

    // ── TikTok : Likes [ Best Speed ] ────────────────────────────────────
    { id: "tt_likes_top1",       smmServiceId: "443", category: "TikTok/General", platform: "TikTok", name: "Likes | TOP SPEED",                          basePriceGHS: 0.071702, per: 1000, unit: "Likes",     icon: "⚡", color: "#7b61ff" },
    { id: "tt_likes_top2",       smmServiceId: "226", category: "TikTok/General", platform: "TikTok", name: "Likes | TOP SPEED [HQ]",                     basePriceGHS: 1.055769, per: 1000, unit: "Likes",     icon: "⚡", color: "#7b61ff" },

    // ── TikTok : Likes [ Non Drop ] ──────────────────────────────────────
    { id: "tt_likes_nd1",        smmServiceId: "444", category: "TikTok/General", platform: "TikTok", name: "Likes | Real Non Drop",                      basePriceGHS: 0.295418, per: 1000, unit: "Likes",     icon: "🛡️", color: "#7b61ff" },
    { id: "tt_likes_nd2",        smmServiceId: "441", category: "TikTok/General", platform: "TikTok", name: "Likes | Real Non Drop ~ Lifetime",           basePriceGHS: 0.437926, per: 1000, unit: "Likes",     icon: "🛡️", color: "#7b61ff" },
    { id: "tt_likes_nd3",        smmServiceId: "193", category: "TikTok/General", platform: "TikTok", name: "Likes | Global Non Drop ~ 365D",             basePriceGHS: 0.930528, per: 1000, unit: "Likes",     icon: "🛡️", color: "#7b61ff" },
    { id: "tt_likes_nd4",        smmServiceId: "191", category: "TikTok/General", platform: "TikTok", name: "Likes | Real Non Drop ~ Lifetime [Fast]",    basePriceGHS: 1.461834, per: 1000, unit: "Likes",     icon: "🛡️", color: "#7b61ff" },

    // ── TikTok : Followers [ Cheapest ] ──────────────────────────────────
    { id: "tt_followers_c1",     smmServiceId: "382", category: "TikTok/General", platform: "TikTok", name: "Followers | HQ Accounts [No Refill]",        basePriceGHS: 0.262989, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_c2",     smmServiceId: "120", category: "TikTok/General", platform: "TikTok", name: "Followers | Low Quality [No Refill]",        basePriceGHS: 0.3531,   per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_c3",     smmServiceId: "380", category: "TikTok/General", platform: "TikTok", name: "Followers | No Refill [Alt]",                basePriceGHS: 0.517817, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_c4",     smmServiceId: "381", category: "TikTok/General", platform: "TikTok", name: "Followers | No Refill [Bulk]",               basePriceGHS: 1.81259,  per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },

    // ── TikTok : Followers [ Best Speed ] ────────────────────────────────
    { id: "tt_followers_bs1",    smmServiceId: "284", category: "TikTok/General", platform: "TikTok", name: "Followers | Real [Less Drop, No Refill]",    basePriceGHS: 0.776725, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_bs2",    smmServiceId: "389", category: "TikTok/General", platform: "TikTok", name: "Followers | Real [30D Refill, Fast]",        basePriceGHS: 0.919532, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_bs3",    smmServiceId: "283", category: "TikTok/General", platform: "TikTok", name: "Followers | Real [30D Refill]",              basePriceGHS: 2.140669, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_bs4",    smmServiceId: "388", category: "TikTok/General", platform: "TikTok", name: "Followers | Real TOP SPEED ~ REFILL 90D",    basePriceGHS: 1.978668, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_bs5",    smmServiceId: "387", category: "TikTok/General", platform: "TikTok", name: "Followers | Real [30D Refill, Less Drop]",   basePriceGHS: 3.310313, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },
    { id: "tt_followers_bs6",    smmServiceId: "390", category: "TikTok/General", platform: "TikTok", name: "Followers | Real [365D Refill, Fast]",       basePriceGHS: 3.315938, per: 1000, unit: "Followers", icon: "👥", color: "#7b61ff" },

    // ── TikTok : Followers [ Non Drop ] ──────────────────────────────────
    { id: "tt_followers_nd1",    smmServiceId: "228", category: "TikTok/General", platform: "TikTok", name: "Followers | Real HQ ~ Lifetime Refill",      basePriceGHS: 1.827922, per: 1000, unit: "Followers", icon: "🛡️", color: "#7b61ff" },
    { id: "tt_followers_nd2",    smmServiceId: "386", category: "TikTok/General", platform: "TikTok", name: "Followers | Real ~ REFILL 30D | Low Drop",   basePriceGHS: 5.885,    per: 1000, unit: "Followers", icon: "🛡️", color: "#7b61ff" },
    { id: "tt_followers_nd3",    smmServiceId: "179", category: "TikTok/General", platform: "TikTok", name: "Followers | Real [Non Drop, 365D Refill]",   basePriceGHS: 5.968688, per: 1000, unit: "Followers", icon: "🛡️", color: "#7b61ff" },
    { id: "tt_followers_nd4",    smmServiceId: "221", category: "TikTok/General", platform: "TikTok", name: "Followers | Real [Non Drop, Lifetime Refill]",basePriceGHS: 7.035264, per: 1000, unit: "Followers", icon: "🛡️", color: "#7b61ff" },

    // ── TikTok : Followers [ Real Profiles ] ─────────────────────────────
    { id: "tt_followers_rp1",    smmServiceId: "384", category: "TikTok/General", platform: "TikTok", name: "Organic Special Followers ~ REFILL 90D",     basePriceGHS: 2.638224, per: 1000, unit: "Followers", icon: "🧑", color: "#7b61ff" },
    { id: "tt_followers_rp2",    smmServiceId: "383", category: "TikTok/General", platform: "TikTok", name: "Followers | Real Active Accounts ~ Lifetime", basePriceGHS: 4.310719, per: 1000, unit: "Followers", icon: "🧑", color: "#7b61ff" },
    { id: "tt_followers_rp3",    smmServiceId: "385", category: "TikTok/General", platform: "TikTok", name: "Followers | Real ~ REFILL 30D",              basePriceGHS: 4.41375,  per: 1000, unit: "Followers", icon: "🧑", color: "#7b61ff" },

    // ── TikTok : Followers [ Monetizable ] ───────────────────────────────
    { id: "tt_followers_mon",    smmServiceId: "227", category: "TikTok/General", platform: "TikTok", name: "Followers | Monetizable ~ 50K+/day",         basePriceGHS: 1.720397, per: 1000, unit: "Followers", icon: "💰", color: "#7b61ff" },

    // ── TikTok : Ghana Services 🇬🇭 ─────────────────────────────────────
    { id: "tt_gh_views1",        smmServiceId: "212", category: "TikTok/General", platform: "TikTok 🇬🇭", name: "Video Views Ghana | Non Drop",           basePriceGHS: 1.865173, per: 1000, unit: "Views",     icon: "🇬🇭", color: "#00e5ff" },
    { id: "tt_gh_views2",        smmServiceId: "200", category: "TikTok/General", platform: "TikTok 🇬🇭", name: "Video Views Ghana | Non Drop [Alt]",     basePriceGHS: 1.839063, per: 1000, unit: "Views",     icon: "🇬🇭", color: "#00e5ff" },
    { id: "tt_gh_likes",         smmServiceId: "201", category: "TikTok/General", platform: "TikTok 🇬🇭", name: "Likes Ghana | Non Drop",                basePriceGHS: 11.77,    per: 1000, unit: "Likes",     icon: "🇬🇭", color: "#7b61ff" },
    { id: "tt_gh_comments",      smmServiceId: "202", category: "TikTok/General", platform: "TikTok 🇬🇭", name: "Comments Ghana | Non Drop",             basePriceGHS: 14.7125,  per: 1000, unit: "Comments",  icon: "🇬🇭", color: "#7b61ff" },
    { id: "tt_gh_followers",     smmServiceId: "203", category: "TikTok/General", platform: "TikTok 🇬🇭", name: "Followers Ghana | Non Drop",            basePriceGHS: 17.655,   per: 1000, unit: "Followers", icon: "🇬🇭", color: "#7b61ff" },

    // ── TikTok : Add Favorites ───────────────────────────────────────────
    { id: "tt_add_fav",          smmServiceId: "229", category: "TikTok/General", platform: "TikTok", name: "Add Favorites | REFILL 365D",                basePriceGHS: 0.016858, per: 1000, unit: "Favs",      icon: "⭐", color: "#7b61ff" },

    // ── TikTok : Save ────────────────────────────────────────────────────
    { id: "tt_save_1",           smmServiceId: "215", category: "TikTok/General", platform: "TikTok", name: "Video Save",                                 basePriceGHS: 0.003807, per: 1000, unit: "Saves",     icon: "🔖", color: "#00e5ff" },
    { id: "tt_save_2",           smmServiceId: "206", category: "TikTok/General", platform: "TikTok", name: "Video Save [Alt]",                           basePriceGHS: 0.022296, per: 1000, unit: "Saves",     icon: "🔖", color: "#00e5ff" },

    // ── TikTok : Shares ──────────────────────────────────────────────────
    { id: "tt_shares_1",         smmServiceId: "207", category: "TikTok/General", platform: "TikTok", name: "Shares",                                     basePriceGHS: 0.078699, per: 1000, unit: "Shares",    icon: "↗️", color: "#00e5ff" },
    { id: "tt_shares_2",         smmServiceId: "208", category: "TikTok/General", platform: "TikTok", name: "Shares [Fast]",                              basePriceGHS: 0.124291, per: 1000, unit: "Shares",    icon: "↗️", color: "#00e5ff" },

    // ── TikTok : Story Views ─────────────────────────────────────────────
    { id: "tt_story_1",          smmServiceId: "209", category: "TikTok/General", platform: "TikTok", name: "Story Viewers [All Stories]",                basePriceGHS: 0.165516, per: 1000, unit: "Views",     icon: "🎞️", color: "#7b61ff" },
    { id: "tt_story_2",          smmServiceId: "214", category: "TikTok/General", platform: "TikTok", name: "Story Viewers [All Stories, Alt]",           basePriceGHS: 0.202297, per: 1000, unit: "Views",     icon: "🎞️", color: "#7b61ff" },

    // ── TikTok : Comment Likes ───────────────────────────────────────────
    { id: "tt_comment_lk",       smmServiceId: "198", category: "TikTok/General", platform: "TikTok", name: "Comment Likes [HQ]",                         basePriceGHS: 0.171607, per: 1000, unit: "Likes",     icon: "💬", color: "#7b61ff" },

    // ── TikTok : Live Views ──────────────────────────────────────────────
    { id: "tt_live_15",          smmServiceId: "353", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [15 min]",                basePriceGHS: 0.197891, per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_30a",         smmServiceId: "354", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [30 min]",                basePriceGHS: 0.334871, per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_30b",         smmServiceId: "358", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [30 min, Fast]",          basePriceGHS: 0.439803, per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_15b",         smmServiceId: "351", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [15 min, Alt]",           basePriceGHS: 0.52303,  per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_60",          smmServiceId: "355", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [60 min]",                basePriceGHS: 0.669743, per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_90",          smmServiceId: "356", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [90 min]",                basePriceGHS: 1.18728,  per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_180",         smmServiceId: "352", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [180 min]",               basePriceGHS: 1.461834, per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },
    { id: "tt_live_2h",          smmServiceId: "357", category: "TikTok/General", platform: "TikTok", name: "Livestream Viewers [2 hours]",               basePriceGHS: 1.582992, per: 1000, unit: "Views",     icon: "🔴", color: "#00e5ff" },

    // ── TikTok : Live Likes ──────────────────────────────────────────────
    { id: "tt_live_likes_1",     smmServiceId: "199", category: "TikTok/General", platform: "TikTok", name: "Livestream Likers",                          basePriceGHS: 0.038841, per: 1000, unit: "Likes",     icon: "❤️", color: "#00e5ff" },
    { id: "tt_live_likes_2",     smmServiceId: "216", category: "TikTok/General", platform: "TikTok", name: "Livestream Likers [Alt]",                    basePriceGHS: 0.058262, per: 1000, unit: "Likes",     icon: "❤️", color: "#00e5ff" },

    // ── TikTok : Battle Points ───────────────────────────────────────────
    { id: "tt_battle_pts",       smmServiceId: "231", category: "TikTok/General", platform: "TikTok", name: "Live PK Battle Points",                      basePriceGHS: 0.143006, per: 1000, unit: "Points",    icon: "⚔️", color: "#00e5ff" },

    // ── TikTok : Live Services ───────────────────────────────────────────
    { id: "tt_live_shares",      smmServiceId: "232", category: "TikTok/General", platform: "TikTok", name: "Live Stream Shares",                         basePriceGHS: 0.184954, per: 1000, unit: "Shares",    icon: "↗️", color: "#00e5ff" },
    { id: "tt_live_comments",    smmServiceId: "233", category: "TikTok/General", platform: "TikTok", name: "Live Stream Comments",                       basePriceGHS: 4.44906,  per: 1000, unit: "Comments",  icon: "💬", color: "#00e5ff" },

    // ══════════════════════════════════════════════════════════════════════
    // FACEBOOK
    // ══════════════════════════════════════════════════════════════════════

    // ── Facebook : Post Reactions ─────────────────────────────────────────
    { id: "fb_react_like",       smmServiceId: "151", category: "TikTok/General", platform: "Facebook", name: "Post Reaction [Like 👍]",                  basePriceGHS: 0.084744, per: 1000, unit: "Reactions",  icon: "👍", color: "#1877F2" },
    { id: "fb_react_care",       smmServiceId: "153", category: "TikTok/General", platform: "Facebook", name: "Post Reaction [Care]",                     basePriceGHS: 0.084744, per: 1000, unit: "Reactions",  icon: "🤗", color: "#1877F2" },
    { id: "fb_react_love",       smmServiceId: "154", category: "TikTok/General", platform: "Facebook", name: "Post Reactions [❤️]",                      basePriceGHS: 0.084744, per: 1000, unit: "Reactions",  icon: "❤️", color: "#1877F2" },

    // ── Facebook : Post Likes [ Cheapest ] ───────────────────────────────
    { id: "fb_likes_c1",         smmServiceId: "411", category: "TikTok/General", platform: "Facebook", name: "Post Likes | Cheap + Slow",                basePriceGHS: 0.06836,  per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },
    { id: "fb_likes_c2",         smmServiceId: "150", category: "TikTok/General", platform: "Facebook", name: "Post Likes | Cheap",                       basePriceGHS: 0.07627,  per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },
    { id: "fb_likes_nr",         smmServiceId: "286", category: "TikTok/General", platform: "Facebook", name: "Post Likes | No Refill",                   basePriceGHS: 0.076886, per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },
    { id: "fb_page_likes_nr",    smmServiceId: "141", category: "TikTok/General", platform: "Facebook", name: "Page Likes | No Refill",                   basePriceGHS: 0.111815, per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },
    { id: "fb_likes_r30",        smmServiceId: "148", category: "TikTok/General", platform: "Facebook", name: "Post Likes | R30",                         basePriceGHS: 0.129235, per: 1000, unit: "Likes",     icon: "👍", color: "#1877F2" },

    // ── Facebook : Post Likes [ Non Drop ] ───────────────────────────────
    { id: "fb_likes_nd1",        smmServiceId: "147", category: "TikTok/General", platform: "Facebook", name: "Post Likes | Non Drop",                    basePriceGHS: 0.10254,  per: 1000, unit: "Likes",     icon: "🛡️", color: "#1877F2" },
    { id: "fb_likes_nd2",        smmServiceId: "149", category: "TikTok/General", platform: "Facebook", name: "Post Likes REAL | R365",                   basePriceGHS: 0.328891, per: 1000, unit: "Likes",     icon: "🛡️", color: "#1877F2" },

    // ── Facebook : Views ─────────────────────────────────────────────────
    { id: "fb_views_1",          smmServiceId: "348", category: "TikTok/General", platform: "Facebook", name: "Video / Reel Views",                       basePriceGHS: 0.016181, per: 1000, unit: "Views",     icon: "📘", color: "#1877F2" },
    { id: "fb_views_2",          smmServiceId: "349", category: "TikTok/General", platform: "Facebook", name: "Reels Views",                              basePriceGHS: 0.077372, per: 1000, unit: "Views",     icon: "📘", color: "#1877F2" },
    { id: "fb_views_3",          smmServiceId: "350", category: "TikTok/General", platform: "Facebook", name: "Video / Reel Views [HQ]",                  basePriceGHS: 0.116061, per: 1000, unit: "Views",     icon: "📘", color: "#1877F2" },

    // ── Facebook : Shares ────────────────────────────────────────────────
    { id: "fb_shares",           smmServiceId: "159", category: "TikTok/General", platform: "Facebook", name: "Post Shares",                              basePriceGHS: 0.103741, per: 1000, unit: "Shares",    icon: "↗️", color: "#1877F2" },

    // ── Facebook : Followers [ Cheapest ] ────────────────────────────────
    { id: "fb_followers_c1",     smmServiceId: "360", category: "TikTok/General", platform: "Facebook", name: "Profile/Page Followers | R30",             basePriceGHS: 0.07806,  per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_followers_c2",     smmServiceId: "379", category: "TikTok/General", platform: "Facebook", name: "Profile Followers | R30 | Slow",           basePriceGHS: 0.090673, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_followers_c3",     smmServiceId: "409", category: "TikTok/General", platform: "Facebook", name: "Profile/Page Followers | No Refill",       basePriceGHS: 0.205815, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_followers_c4",     smmServiceId: "361", category: "TikTok/General", platform: "Facebook", name: "Profile/Page Followers | NR [Bulk]",       basePriceGHS: 0.180088, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_page_likes_f1",    smmServiceId: "377", category: "TikTok/General", platform: "Facebook", name: "Page Likes + Followers | REFILL 30D",      basePriceGHS: 0.215928, per: 1000, unit: "Followers", icon: "👍", color: "#1877F2" },
    { id: "fb_page_fol_15d",     smmServiceId: "376", category: "TikTok/General", platform: "Facebook", name: "Page Followers | REFILL 15D",              basePriceGHS: 0.219656, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_page_likes_nr",    smmServiceId: "378", category: "TikTok/General", platform: "Facebook", name: "Page Likes + Followers | No Refill",       basePriceGHS: 0.312427, per: 1000, unit: "Followers", icon: "👍", color: "#1877F2" },

    // ── Facebook : Followers [ Best Speed ] ──────────────────────────────
    { id: "fb_followers_bs1",    smmServiceId: "363", category: "TikTok/General", platform: "Facebook", name: "Page Followers | REFILL 15D [Fast]",       basePriceGHS: 0.341688, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_followers_bs2",    smmServiceId: "364", category: "TikTok/General", platform: "Facebook", name: "Page Likes + Followers REAL | REFILL 60D", basePriceGHS: 0.377873, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_followers_bs3",    smmServiceId: "362", category: "TikTok/General", platform: "Facebook", name: "Page + Profile Followers HQ | REFILL 30D", basePriceGHS: 1.567371, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },

    // ── Facebook : Followers [ Profile ] ─────────────────────────────────
    { id: "fb_prof_fol_nr",      smmServiceId: "373", category: "TikTok/General", platform: "Facebook", name: "Profile Followers | Real HQ | No Refill",  basePriceGHS: 0.205815, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_prof_fol_r30",     smmServiceId: "375", category: "TikTok/General", platform: "Facebook", name: "Profile/Page Followers | R30",             basePriceGHS: 0.07806,  per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_prof_fol_nd",      smmServiceId: "374", category: "TikTok/General", platform: "Facebook", name: "Profile/Page Followers | R30D | Non Drop",  basePriceGHS: 0.277546, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },

    // ── Facebook : Followers [ Page ] ────────────────────────────────────
    { id: "fb_page_fol_nr",      smmServiceId: "365", category: "TikTok/General", platform: "Facebook", name: "Page Followers | Profile & Page HQ | No Refill", basePriceGHS: 0.231542, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_page_fol_15d2",    smmServiceId: "366", category: "TikTok/General", platform: "Facebook", name: "Page Followers | REFILL 15D",              basePriceGHS: 0.219656, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_page_fol_60d",     smmServiceId: "367", category: "TikTok/General", platform: "Facebook", name: "Page Likes + Followers | REFILL 60D",      basePriceGHS: 0.242919, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },
    { id: "fb_page_fol_30d",     smmServiceId: "368", category: "TikTok/General", platform: "Facebook", name: "Page Followers | REFILL 30D",              basePriceGHS: 0.396604, per: 1000, unit: "Followers", icon: "👥", color: "#1877F2" },

    // ── Facebook : Page Followers + Likes ────────────────────────────────
    { id: "fb_pfl_real60",       smmServiceId: "369", category: "TikTok/General", platform: "Facebook", name: "Page Likes + Followers REAL | REFILL 60D", basePriceGHS: 0.2969,   per: 1000, unit: "Followers", icon: "👍", color: "#1877F2" },
    { id: "fb_pfl_nr2",          smmServiceId: "372", category: "TikTok/General", platform: "Facebook", name: "Page Likes + Followers | No Refill",       basePriceGHS: 0.312427, per: 1000, unit: "Followers", icon: "👍", color: "#1877F2" },
    { id: "fb_pfl_r30",          smmServiceId: "370", category: "TikTok/General", platform: "Facebook", name: "Page Likes + Followers | R30",             basePriceGHS: 0.331328, per: 1000, unit: "Followers", icon: "👍", color: "#1877F2" },
    { id: "fb_pfl_r30b",         smmServiceId: "371", category: "TikTok/General", platform: "Facebook", name: "Page Likes / Followers | REFILL 30D",      basePriceGHS: 0.368838, per: 1000, unit: "Followers", icon: "👍", color: "#1877F2" },
];

/* ─────────────────────────────────────────────
   3.  BULK SMS PLANS
   count   = number of SMS messages included
   price   = GHS charged to the reseller / customer
   highlight = visual emphasis in UI
   ───────────────────────────────────────────── */
const SMS_PLANS = [
    { id: "sms_1000", label: "1,000 SMS", count: 1000, price: 20, badge: "Starter"    },
    { id: "sms_2000", label: "2,000 SMS", count: 2000, price: 35, badge: "Popular",  highlight: true },
    { id: "sms_4000", label: "4,000 SMS", count: 4000, price: 50, badge: "Best Value" },
];

/* ─────────────────────────────────────────────
   Exports  (CommonJS — adapt to ESM if needed)
   ───────────────────────────────────────────── */
if (typeof module !== "undefined") {
    module.exports = { BASE_BUNDLES, SOCIAL_SERVICES, SMS_PLANS, SMS_PROFIT_MARGIN: SMM_PROFIT_MARGIN, getSocialBasePrice };
}
